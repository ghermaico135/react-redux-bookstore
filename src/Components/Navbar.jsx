import { Link } from 'react-router-dom';
import '../Components/styles/Navbar.css'


function Navbar() {
  return (
    <nav className="navbar-container">
    
        <ul className="nav-items">
        <li className="">
        <Link className="bookStore" to="/"> 
        <p className="BookStore-cms">BookStore CMS</p></Link>
           
      </li>
            <li className="link-item">
              <Link className="links" to="/">BOOKS</Link>
            </li>
            <li className="link-item">
              <Link className="links" to="/categories"> CATEGORIES</Link>
            </li>
        </ul>
        <div className="userName">
        <img className="userName-icon" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
        </div>
   
    </nav>
  );
}

export default Navbar