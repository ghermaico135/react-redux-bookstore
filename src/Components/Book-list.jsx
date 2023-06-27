
import { useSelector} from 'react-redux';
import BookItem from "./Book-item"

function BookList() {
    const {bookStore} = useSelector((store) => store.bookStore)
  return (
      <ul>
          {
           bookStore.map((book) =>{
          return  <BookItem  key={book.id} {...book}/>
        })}
      </ul>
      
  )
}



export default BookList