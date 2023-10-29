import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/" >
        <img src={"./public/honey_mon.png"} alt="Logo Honey Moon" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="categoria/1" >Aritos</NavLink>
                </li>
                <li>
                  <NavLink to="categoria/2">Collares</NavLink>
                </li>
                <li>
                  <NavLink to="categoria/3">Pulseras</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar