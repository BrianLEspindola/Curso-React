import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Honey Moon</h1>

        <nav>
            <ul>
                <li>Collares</li>
                <li>Aritos</li>
                <li>Anillos</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar