import React from "react";
import './Navbar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const categories = [
        { name: 'electrodomesticos', id: 0 },
        { name: 'tecnologia', id: 1 },
        { name: 'deportes', id: 2 }
    ];

    return(
        <header className='navbar'>
            <div className='navbar_wrapper'>
                <div>
                    <Link to='/' className='navbar__logo'>
                        <span>MiTienda</span>
                    </Link>
                </div>
                <div>
                    {categories.map((category, index) => {
                        return(
                            <NavLink 
                                to={'/category/' + category.id} 
                                key={index} 
                                className='navbar__link'
                            >
                            {category.name}
                            </NavLink>
                        )
                    })}
                </div>
                <CartWidget />
            </div>
        </header>
    )
}