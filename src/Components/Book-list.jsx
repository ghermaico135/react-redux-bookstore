
import BookItem from "./Book-item"
import { useSelector } from 'react-redux'

function BookList() {
    const bookStore = useSelector((state) => state.bookStore)
  return (
      <ul>
          {bookStore.map((book) =>(
           <BookItem  key={book.item_id} id={book.item_id} {...book} />
          ))}
      </ul>
  )
}



export default BookList