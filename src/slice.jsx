import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/";
const appId = JSON.parse(localStorage.getItem("AppID"));
const initialState = {
  books: [],
  loading: false,
  error: null,
};
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBooksSuccess: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    fetchBooksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addBookRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addBookSuccess: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },
    addBookFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeBook: (state, action) => {
      const { itemId } = action.payload;
      state.books = state.books.filter((book) => book.item_id !== itemId);
    },
  },
});
export const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksFailure,
  addBookRequest,
  addBookSuccess,
  addBookFailure,
  removeBook,
} = booksSlice.actions;
export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch(fetchBooksRequest());
    try {
      const response = await axios.get(`${baseUrl}${appId}/books`);
      dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
      dispatch(fetchBooksFailure(error.message));
    }
  };
};
export const addBook = (bookData) => {
  return async (dispatch) => {
    dispatch(addBookRequest());
    try {
      const response = await axios.post(
        `${baseUrl}${appId}/books`,
        {
          item_id: bookData.item_id,
          title: bookData.title,
          author: bookData.author,
          category: bookData.category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(addBookSuccess(response.data));
    } catch (error) {
      console.log(error.response);
      dispatch(addBookFailure(error.message));
    }
  };
};
export default booksSlice.reducer;
