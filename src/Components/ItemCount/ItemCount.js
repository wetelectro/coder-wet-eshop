import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useCounter } from "../../Hooks/CounterHook";
import './ItemCount.css';

export const ItemCount = (props) => {
    const [count, add, sub, rs] = useCounter(0, props.stock);
    const [isVisible, setVisible] = useState(true);
    const navigate = useNavigate();

    const addToCart = (count) => {
        setVisible(false);
        props.addToCart(count);
    }

    return(
        <div className='item_counter__wrapper'>
            { isVisible ? 
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
                <button className='buy__button' onClick={() => {navigate('/cart')}}>
                    <span>Finalizar Compra</span>
                </button>
            }
        </div>
    )
}