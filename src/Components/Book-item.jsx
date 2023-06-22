import PropTypes from 'prop-types';
import style from "@/Components/styles/bookItem.module.css"

function BookItem({bookProps,deleteBook}) {
  return (
 
     <div className={style["bookItem-container"]}>
    <li className={style.bookItem}>
      <h1>{bookProps.book}</h1>
      <button className={style.removeBtn}onClick={() => deleteBook(bookProps.id)}>Remove</button>
    
    </li>
    </div>
  
  )
}

BookItem.propTypes = {
  ["bookProps.book"] :PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  bookProps: PropTypes.string.isRequired,
  ["bookProps.id"]:PropTypes.number.isRequired
};

export default BookItem

