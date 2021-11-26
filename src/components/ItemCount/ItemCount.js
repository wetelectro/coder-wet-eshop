import React from "react";
import { useCounter } from "../../Hooks/CounterHook";
import './ItemCount.css';

export const ItemCount = () => {
    const [count, add, sub, rs] = useCounter(0);

    return(
        <div className='item_counter'>
            <span className='item_counter__count'>Cantidad : {count}</span>
            <div className='item_counter__buttons_wrapper'>
                <button onClick={sub}>Quitar Producto</button>
                <button onClick={rs}>Reiniciar</button>
                <button onClick={add}>Agregar Producto</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}