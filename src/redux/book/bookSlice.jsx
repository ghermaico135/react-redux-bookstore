import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const uniqueBookId ="jBPPSDYk5Iy5vRYCcMjK"
const baseUrl =`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/`


export const fetchBooks = createAsyncThunk("books/fetchBooks",
 async (name,thunkAPI) =>{
  try{
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueBookId}/books`)
    return response.data
  } catch(error){
    return thunkAPI.rejectWithValue("something went wrong");
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
  reducers :{

    addBook : async (state,action) =>{

      try{
        const {item_id,title,author,category} = action.payload
        await axios({
          method: 'post',
          url: baseUrl,
          data: 
            {
              item_id,
              title,
              author,
              category
            }
        });
      }catch(error){
        return thunkAPI.rejectWithValue("something went wrong with posting Item");
      }
    
      // state.push({item_id,title,author,category})
    },
    removeBook : (state,action) =>{
      try{
        const {item_id} = action.payload
        axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueBookId}/books/${item_id}`)
      }catch(error){
        return thunkAPI.rejectWithValue("something went wrong with deleting");
      }
      

      // return state.filter((book) => book.item_id !== id)
      
    }
  },
  extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state, action) => {
			state.isLoading = true;
		}),
			builder.addCase(fetchBooks.fulfilled, (state, action) => {
				state.users = action.payload;
				state.isLoading = false;
			}),
			builder.addCase(fetchBooks.rejected, (state, action) => {
				state.isLoading = false;
				state.error = "something went wrong";
			});
	},
})


export const {addBook, removeBook} = bookSlice.actions;
export default bookSlice.reducer;