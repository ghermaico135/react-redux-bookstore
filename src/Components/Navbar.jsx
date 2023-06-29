import { Link } from 'react-router-dom';
import '../Components/styles/Navbar.css'


function Navbar() {
  return (
    <nav className="navbar-container">
      <h1 className="BookStore-cms">
            BookStore CMS
      </h1>
        <ul className="nav-items">
          
            <li className="link-item">
              <Link className="links" to="/">BOOKS</Link>
            </li>
            <li className="link-item">
              <Link className="links" to="/categories"> CATEGORIES</Link>
            </li>
        </ul>
        <div className="userName">
        <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle"/>
        </div>
   
    </nav>
  );
}

export default Navbar