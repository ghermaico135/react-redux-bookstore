
import {useState} from "react"

import style from "@/Components/styles/form.module.css"


function BookForm() {
  const [book ,setBooks] = useState('')

  const handleChange = (e) => {
    setBooks(e.target.value)
  }



  return (
    <div className={style["form-container"]}>
      <h1>ADD NEW BOOK</h1>
      <form className={style.form}>
     <input className={style.input} type="text" placeholder="Add book" value={book} onChange={handleChange} />
     <select className={style.categories} name="Categories" >
      <option value="">Fiction</option>
      <option value="">Programming</option>
     </select>
     <button className={style.submitBtn} type="Submit" value="Submit">ADD BOOK</button>
     </form>
    </div>
  )
}

export default BookForm


