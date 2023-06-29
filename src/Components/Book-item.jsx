import PropTypes from 'prop-types';
import "../Components/styles/bookItem.css"
import { removeBooks } from '../redux/book/bookSlice';
import { useDispatch } from 'react-redux';


function BookItem({ id, title, author }) {
  const dispatch = useDispatch();

  return (
    <div className="bookItem-container">
      <li className="bookItem">
        <div class="detail-container">
            <h1 className="title">{title} </h1>
            <h4>{author}</h4>
            <div className="Item-modifyBtn">
                <button className="Btn">Comments|</button>
                <button className="Btn" onClick={()=> dispatch(removeBooks({ id }))}>Remove |</button>
                <button className="Btn">Edit</button>
            </div>
        </div>
        <div className="book-stat-container">
        <div className="item-stat">
              <img src="" alt="image" />
              <div className="stat-details">
                <h1>64%</h1>
                <h6>completed</h6>
              </div>
          </div>
          <div className="bookCategory">
            <h4>Current chapter</h4>
            <h3>Chapter 17</h3>
            <button className="Btn" onClick={()=> dispatch(removeBooks({ id }))}>Remove</button>
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


