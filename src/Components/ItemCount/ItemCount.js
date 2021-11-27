import React from "react";
import { useCounter } from "../../Hooks/CounterHook";
import './ItemCount.css';

export const ItemCount = () => {
    const [count, add, sub, rs] = useCounter(0);

    return(
        <div className='item_counter__wrapper'>
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
            <button className='add_to_cart__button'>
                <span>Agregar al carrito</span>
            </button>
        </div>
    )
}