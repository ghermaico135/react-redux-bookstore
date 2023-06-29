import BookItem from "./Book-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/book/bookSlice";
import { useEffect } from "react";

function BookList() {
  const { bookStore, isLoading, error } = useSelector(
    (state) => state.bookStore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h4>Error: {error}</h4>
      </div>
    );
  } else if (Object.keys(bookStore).length === 0) {
    return (
      <div>
        <h3>No books found</h3>
      </div>
    );
  } else {
    const bookData = Object.values(bookStore)[0];
   
    return (
      <div>{
        bookData.map((book) =>(
            <ul>
            <BookItem
              key={book.item_id}
              id={book.item_id}
              {...book}
            />
          </ul>
        ))
        }
        
      </div>
    );
  }
}

export default BookList;