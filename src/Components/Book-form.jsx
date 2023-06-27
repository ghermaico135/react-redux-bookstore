import { useDispatch } from "react-redux"
import style from "@/Components/styles/form.module.css"
import {addBook} from "../redux/book/bookSlice"

function BookForm() {
  const dispatch = useDispatch()
  
  return (
    <div className={style["form-container"]}>
      <h1>ADD NEW BOOK</h1>
      <form className={style.form}>
     <input className={style.input} type="text" placeholder="Add book" value="books"  />
     <select className={style.categories} name="Categories" >
      <option value="">Fiction</option>
      <option value="">Programming</option>
     </select>
     <button className={style.submitBtn} type="Submit" value="Submit" onClick={() => dispatch(addBook())}>ADD BOOK</button>
     </form>
    </div>
  )
}

export default BookForm


