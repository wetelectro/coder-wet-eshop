import React from "react";
import './Navbar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const links = ['Inicio', 'Contacto', 'Login/Register'];

    return(
        <header className='navbar'>
            <div className='navbar_wrapper'>
                <div>
                    <Link to='/' className='navbar__logo'>
                        <span>MiTienda</span>
                    </Link>
                </div>
                <div>
                    {links.map((link, index) => {
                        return <a href='/#' key={index} className='navbar__link'>{link}</a>
                    })}
                </div>
                <CartWidget />
            </div>
        </header>
    )
}