import {createSlice} from "@reduxjs/toolkit"


const initialState = 
  [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction"
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction"
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction"
    },
  ]

  
const bookSlice = createSlice({
  name:"books",
  initialState,
  reducers :{
    // addBook : (state) =>{
    //   return  Object.assign({}, state, {bookStore:[...state.bookStore, {id:"item4",title:state.title, author:state.author}]})
    // },
    addBook : (state,action) =>{
      const {id,title,author} = action.payload
      state.push({id,title,author})
    },
    removeBook : (state,action) =>{
      const {id} = action.payload
      return state.filter((book) => book.item_id !== id)
      
    }
  }
})


export const {addBook, removeBook} = bookSlice.actions;
export default bookSlice.reducer;