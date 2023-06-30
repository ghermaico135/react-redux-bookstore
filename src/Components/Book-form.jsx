import { useDispatch } from "react-redux"
import "../Components/styles/form.css"
import {addBooks} from "../redux/book/bookSlice"
import { useState } from "react"



function BookForm() {
  const dispatch = useDispatch()

  const [details, setDetails] = useState({
    title:"",
    author:"",
    category:""
  })

  const handleChange = (e) =>{
    const {name ,value} = e.target;

    setDetails((prev) =>{
      return {...prev,
        [name]:value
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let item_id = Math.floor(Math.random() * 1000)
    dispatch(addBooks({
      item_id: `item_${item_id}`,
      title: details.title,
      author: details.author,
      category:"programming"
    }))
    setDetails('')
  }

  return (
    <div className="form-container">
      <h1 className="add-book">ADD NEW BOOK</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="inputContainer">
            <div>
            <input name="title" className="input" type="text"  value={details.title || ""} placeholder="Add book" onChange={handleChange} />
            </div>
            <div>
            <input name="author" className="input" type="text" value={details.author || "" } placeholder="Add author"  onChange={handleChange}  />
            </div>
        </div>
      
          <select className="categories" name="Categories" onChange={handleChange} >
              <option value="fiction">Fiction</option>
              <option value="programming">Programming</option>
            </select>
       
        <div>
            <button className="submitBtn" type="Submit">ADD BOOK</button>
        </div>
        
          
      </form>
    </div>
  )
}

export default BookForm


