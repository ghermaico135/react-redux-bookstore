import PropTypes from 'prop-types';
import "../Components/styles/bookItem.css"
import { removeBooks } from '../redux/book/bookSlice';
import { useDispatch } from 'react-redux';
import progressBarImg from "../Components/images/progressBar.png"


function BookItem({ id, title, author }) {
  const dispatch = useDispatch();

  return (
    <div className="bookItem-container">
      <li className="bookItem">
        <div className="detail-container">
          <p className="detail-action">Actions</p>
            <p className="book-title">{title} </p>
            <p className="book-author">{author}</p>
            <div className="Item-modifyBtn">
                <button className="Btn">Comments |</button>
                <button className="Btn" onClick={()=> dispatch(removeBooks({ id }))}>Remove |</button>
                <button className="Btn">Edit</button>
            </div>
        </div>
        <div className="book-stat-container">
        <div className="item-stat">
              <img className="progressBar" src={progressBarImg} alt="progressBarImg" />
              <div className="stat-details">
                <h1 className="stat-percentage">90%</h1>
                <h6 className="stat-completed">completed</h6>
              </div>
          </div>
          <div className="bookCategory">
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <h3 className="chapter-number">Chapter 17</h3>
            <button className="Btn-update" onClick={()=> dispatch()}>UPDATE PROGRESS</button>
          </div>
        </div>
         
        
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


