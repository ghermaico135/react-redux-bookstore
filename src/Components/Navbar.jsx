import { Link } from 'react-router-dom';
import style from '@/Components/styles/Navbar.module.css'


function Navbar() {
  return (
    <nav className={style["navbar-container"]}>
      <ul className={style["nav-items"]}>
      <h1 className={style.heading}>
        <Link className={style.links} to="/">BookStore CMS</Link>
      </h1>
        <li className={style["link-item"]}>
          <Link className={style.links} to="/">BOOKS</Link>
        </li>
        <li className={style["link-item"]}>
          <Link className={style.links} to="/categories"> CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar