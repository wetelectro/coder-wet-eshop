import React from "react";
import { useNavigate } from "react-router";
import './CartWidget.css';

export const CartWidget = () => {
    const navigate = useNavigate();

    const toCart = () => {
        navigate('/cart');
    }

    return(
        <div className='cart_container' onClick={toCart}>
            <i className="fas fa-shopping-cart"></i><span>Carrito</span>
        </div>
    )
}