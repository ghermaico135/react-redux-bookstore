
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const baseUrl =`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/`
const uniqueBookId ="SNSSUbXNWeQDWaUtTmNl"

const initialState = {
	bookStore: [],
	isLoading: false,
	error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks",
 async (thunkAPI) =>{
  try{
    const response = await axios.get(`${baseUrl}${uniqueBookId}/books`)
    const {...data} = response.data
    return data
  } catch(error){
    return thunkAPI.rejectWithValue("something went wrong");
  }
 })

 export const addBooks = createAsyncThunk("books/addBook",
 async (bookData,thunkAPI) =>{
  try{

   const response = await axios.post(`${baseUrl}${uniqueBookId}/books`,bookData);
   thunkAPI.dispatch(fetchBooks()) 
   const { cacheControl, contentLength, contentType } = response.headers;
   return {
      data: response.data,
      cacheControl,
      contentLength,
      contentType,
    }

  }catch(error){
    return thunkAPI.rejectWithValue("Something went wrong with posting the item.");

  }
 })

 export const removeBooks = createAsyncThunk(
  "books/removeBook",
 async (Item_id,thunkAPI) =>{
  try{
     const response = await axios.delete(`${baseUrl}${uniqueBookId}/books/${Item_id}`)
    thunkAPI.dispatch(fetchBooks())
    return response.data
  }catch(error){
    return thunkAPI.rejectWithValue("Something went wrong with deleting the item.");
  }
 })


const bookSlice = createSlice({
  name:"books",
  initialState,
  reducer:{},
  extraReducers: (builder) => { 
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const bookItems = Object.keys(action.payload)
      state.bookStore =[]
      bookItems.forEach((item) =>{
        const book = action.payload[item][0];
        state.bookStore.push({
          author:book.author,
          title: book.title,
          category: book.category,
          item_id: item,
        })
      })
      state.isLoading = false;
    })

  }
})


export const { actions} = bookSlice.actions;
export default bookSlice.reducer;