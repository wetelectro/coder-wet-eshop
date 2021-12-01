import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../Context/cartContext";
import './CartWidget.css';

export const CartWidget = () => {
    const Cart = useCart();
    const navigate = useNavigate();

    const toCart = () => {
        navigate('/cart');
    }

    return(
        <div className='cart_container' onClick={toCart}>
            <i className="fas fa-shopping-cart"></i>
            <span>Carrito</span>
            { !Cart.isEmpty() ? <span className='cart_widget__counter' >{Cart.itemCount()}</span> : ''}
        </div>
    )
}