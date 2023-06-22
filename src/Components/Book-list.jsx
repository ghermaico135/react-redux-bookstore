import PropTypes from 'prop-types';
import BookItem from "./Book-item"

function BookList({bookStoreProps, deleteBook}) {
  
  return (
  
      <ul>
          {
           bookStoreProps.map((book) =>(
              <BookItem  key={book.id} bookProps={book} deleteBook={deleteBook}/>
              
           ))}
      </ul>
      
  )
}

BookList.propTypes = {
  bookStoreProps :PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  ["bookStoreProps.map"]:PropTypes.string.isRequired
};

export default BookList