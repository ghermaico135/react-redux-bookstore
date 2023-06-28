
import BookItem from "./Book-item"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from "@/redux/book/bookSlice"
import { useEffect } from "react"


function BookList() {
    const {bookStore,isLoading,error} = useSelector((state) => state.bookStore)

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchBooks())
},[])

if(isLoading){
    return(
        <div>
            <h4>Loading...</h4>
        </div>
    )
}

if(error !== undefined){
    return(
        <div>
            <h4>Error :{error}</h4>
        </div>
    )
}


  return (
    <div>
        {bookStore && bookStore.length > 0 ?
         (<ul>
          {bookStore.map((book) =>(
           <BookItem  key={book.item_id} id={book.item_id} {...book} />
          ))}
      </ul>) :
      (<h3>No users found</h3>)
          }
    </div>
     
  )
}



export default BookList