import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <img src={"./public/honey_mon.png"} alt="Logo Honey Moon" />

        <nav>
            <ul>
                <li>Collares</li>
                <li>Aritos</li>
                <li>Pulseras</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar