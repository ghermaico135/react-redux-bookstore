import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"




const baseUrl =`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/`
const uniqueBookId ="UmB0SO4lefpRCF5XLhcV"


export const fetchBooks = createAsyncThunk("books/fetchBooks",
 async (name,thunkAPI) =>{
  try{
    const response = await axios.get(`${baseUrl}${uniqueBookId}/books`)
    // console.log(response.data)
    return response.data
  } catch(error){
    return thunkAPI.rejectWithValue("something went wrong");
  }
 })

 export const addBooks = createAsyncThunk("books/addBook",
 async (bookData,thunkAPI) =>{
  try{
    const {item_id,title,author,category} = bookData
    await axios({
      method: 'post',
      url: `${baseUrl}${uniqueBookId}/books`,
      data: 
        {
          item_id,
          title,
          author,
          category
        }
    });
    return bookData
  }catch(error){
    return thunkAPI.rejectWithValue("Something went wrong with posting the item.");
  }
 })

 export const removeBooks = createAsyncThunk("books/removeBook",
 async (Item_id,thunkAPI) =>{
  try{
    axios.delete(`${baseUrl}${uniqueBookId}/books/${Item_id}`)
    return Item_id
  }catch(error){
    return thunkAPI.rejectWithValue("Something went wrong with deleting the item.");
  }
 })


 const initialState = {
	bookStore: [],
	isLoading: false,
	error: undefined,
};
  
const bookSlice = createSlice({
  name:"books",
  initialState,
  extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state, action) => {
			state.isLoading = true;
		}),
			builder.addCase(fetchBooks.fulfilled, (state, action) => {
				state.bookStore = action.payload;
        console.log(state.bookStore)
				state.isLoading = false;
			}),
			builder.addCase(fetchBooks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = "something went wrong";
			}),
      builder.addCase(addBooks.fulfilled, (state, action) => {
        for(let newBook in action.payload){
          state.bookStore.push(newBook);
        }
        state.bookStore = [...state.bookStore];
        // const newBook = action.payload;
        // state.bookStore = [...state.bookStore, newBook];
      }),
      builder.addCase(removeBooks.fulfilled, (state, action) => {
        state.bookStore = state.bookStore.filter((book) => book.item_id !== action.payload);
			})
    }
})


export const { actions } = bookSlice;
export default bookSlice.reducer;