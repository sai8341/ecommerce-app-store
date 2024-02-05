import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    console.log(menu)

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu">
                <li onClick={() => setMenu('shop')}><Link to='/'>Shop</Link> { menu === 'shop' ? <hr /> : null }</li>
                <li onClick={() => setMenu('men')}><Link to='/men'>Men</Link> { menu === 'men' ? <hr /> : null } </li>
                <li onClick={() => setMenu('women')}><Link to='/women'>Women</Link> { menu === 'women' ? <hr /> : null }</li>
                <li onClick={() => setMenu('kids')}><Link to='/kids'>Kids</Link> { menu === 'kids' ? <hr /> : null }</li>
            </ul>

            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;