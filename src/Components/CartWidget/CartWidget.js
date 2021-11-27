import React from "react";
import './CartWidget.css';

export const CartWidget = () => {

    return(
        <div className='cart_container'>
            <i className="fas fa-shopping-cart"></i><span>Carrito</span>
        </div>
    )
}