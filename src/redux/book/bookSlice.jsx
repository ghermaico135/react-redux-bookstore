import {createSlice} from "@reduxjs/toolkit"


const initialState = {
  bookStore :[],
  title:"lastNight",
  author:"miki",
  isLoading:true
}

const bookSlice = createSlice({
  name:"books",
  initialState,
  reducers :{
    addBook : () =>{
   
    },

    removeBook : (state,action) =>{
      const bookId = action.payload
      state.bookStore = state.bookStore.filter((book) => book.id !== bookId)
    }
  }
})


export const {addBook,removeBook} = bookSlice.actions
export default bookSlice.reducer;