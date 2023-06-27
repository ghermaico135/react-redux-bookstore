import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from "@/Components/styles/bookItem.module.css"
import { removeBook } from '../redux/book/bookSlice';

function BookItem({id,title}) {

  const dispatch = useDispatch()
  return (
     <div className={style["bookItem-container"]}>
    <li className={style.bookItem}>
      <h1>{title}</h1>
      <button className={style.removeBtn} onClick={() => dispatch(removeBook(id))}>Remove</button>
    </li>
    </div>
  
  )
}

BookItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
};

export default BookItem

