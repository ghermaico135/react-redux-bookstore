import {useState,useEffect} from "react"
import BookList from "./Book-list"
import BookForm from "./Book-form"


function BookStoreLogics() {

  const [book,setBookStore] = useState('')

 
 const bookStore =[
    {
      id:1,
      book:"Ronaldo"
    },
    {
      id:2,
      book:"miki"
    },
  ]

  useEffect( () =>{
    
  },[book])

  const deleteBook =(id) =>{
    setBookStore([
      ...bookStore.filter((book) =>{
        return book.id !== id
      })
    ])
  }
  
  return (
    <>
     <ul>
        <BookList bookStoreProps={bookStore} deleteBook={deleteBook} />
     </ul>
    <BookForm/>
    </>
  )
}

export default BookStoreLogics