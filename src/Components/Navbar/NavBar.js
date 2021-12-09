import React, { useEffect } from "react";
import './Navbar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { getCategories } from "../../Firebase/config";

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then( res => {
                setCategories([...res])
            });
    },[]);

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