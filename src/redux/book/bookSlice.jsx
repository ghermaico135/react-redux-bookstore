
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"


const baseUrl =`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/`
const uniqueBookId ="UmB0SO4lefpRCF5XLhcV"

const initialState = {
	bookStore: [],
	isLoading: false,
	error: null,
};


const bookSlice = createSlice({
  name:"books",
  initialState,
  reducer:{

    // fetchBooksRequest:(state) =>{
    //   state.loading = true;
    //   state.error = null;
    // },
    // fetchBooksSuccess:(state,action) =>{
		// 		state.isLoading = false;
    //     state.bookStore = action.payload;
    // },
    // fetchBooksFailure:(state,action)=>{
    //   state.isLoading = false;
    //   state.error = "something went wrong";
    // },
    // addBookRequest:(state) =>{
    //   state.isLoading = true;
    //   state.error = null
    // },
    // addBookSuccess:(state,action) =>{
    //   state.isLoading = false;
    //   state.bookStore.push(action.payload);
    // },
    // removeBookSuccess :(state,action) =>{
    //   const { itemId } = action.payload;
    //   state.bookStore = state.bookStore.filter((book) => book.item_id !== itemId);
    // }


  },
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
        // for(let newBook in action.payload){
          state.bookStore.push(action.payload);
        // }
        // state.bookStore = [...state.bookStore];
        // const newBook = action.payload;
        // state.bookStore = [...state.bookStore, newBook];

      }),
      builder.addCase(removeBooks.fulfilled, (state, action) => {
        state.bookStore = state.bookStore.filter((book) => book.item_id !== action.payload);
			})
    }
})

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
    // const {item_id,title,author,category} = bookData
   const response = await axios({
      method: 'post',
      url: `${baseUrl}${uniqueBookId}/books`,
      headers:{
        "Content-Type": "application/json",
      },
      data: 
        {
          item_id:bookData.item_id,
          title:bookData.title,
          author:bookData.author,
          category:bookData.category
        }
    });
    dispatch(addBookSuccess(response.data))

  }catch(error){
    console.log(error.response)
    return thunkAPI.rejectWithValue("Something went wrong with posting the item.");
  // dispatch(addBookFailure(error.message))
  }
 })

 export const removeBooks = createAsyncThunk("books/removeBook",
 async (Item_id,thunkAPI) =>{
  try{
    const Item_id = axios.delete(`${baseUrl}${uniqueBookId}/books/${Item_id}`,{item_id:Item_id})
    dispatch(removeBookSuccess(Item_id))
  }catch(error){
    return thunkAPI.rejectWithValue("Something went wrong with deleting the item.");
  }
 })

export const { actions} = bookSlice.actions;
export default bookSlice.reducer;