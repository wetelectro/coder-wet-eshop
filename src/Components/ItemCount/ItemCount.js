import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../Context/cartContext";
import { useCounter } from "../../Hooks/CounterHook";
import './ItemCount.css';

export const ItemCount = (props) => {
    const [count, add, sub, rs] = useCounter(1, props.stock);
    const navigate = useNavigate();
    const Cart = useCart();

    const addToCart = (count) => {
        props.addToCart(count);
    }

    return(
        <div className='item_counter__wrapper'>
            { !Cart.isInCart(props.id) ? 
                <React.Fragment>
                    <div className='item_counter__panel'>
                        <div className='item_counter'>
                            <button className='item_counter_button item_counter_button--left' onClick={sub}>-</button>
                            <span className='item_counter__count'>Cantidad : {count}</span>
                            <button className='item_counter_button item_counter_button--right' onClick={add}>+</button>
                        </div>
                        <button className='reset_count_button' onClick={rs}>
                            <i class="fas fa-redo-alt"></i>
                        </button>
                    </div>
                    <button className='add_to_cart__button' onClick={() => {addToCart(count)}}>
                        <span>Agregar al carrito</span>
                    </button>
                </React.Fragment>
                :
                <React.Fragment>
                    {Cart.isInCart(props.id) ? <span className='item_counter__cart_legend'>El articulo se encuentra actualmente en el carrito</span> : ''}
                    <button className='buy__button' onClick={() => {navigate('/cart')}}>
                        <span>Finalizar Compra</span>
                    </button>
                </React.Fragment>
            }
        </div>
    )
}