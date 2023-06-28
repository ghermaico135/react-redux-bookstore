import PropTypes from 'prop-types';
import style from '@/Components/styles/bookItem.module.css';
import { removeBook } from '../redux/book/bookSlice';
import { useDispatch } from 'react-redux';


function BookItem({ id, title, author }) {
  const dispatch = useDispatch();

  

  return (
    <div className={style['bookItem-container']}>
      <li className={style.bookItem}>
        <h1>{title} {author}</h1>
        <button className={style.removeBtn} onClick={()=> dispatch(removeBook({ id }))}>Remove</button>
      </li>
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookItem;


