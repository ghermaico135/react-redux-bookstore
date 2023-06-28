import { configureStore } from '@reduxjs/toolkit'
import bookReducer from "./book/bookSlice"
import categoryReducer from "./categories/categoriesSlice";


export const store = configureStore({
  reducer :{
    bookStore:bookReducer,
    bookCategory:categoryReducer
  },
})