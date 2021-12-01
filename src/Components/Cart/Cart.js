import React from "react";
import './Cart.css';
import { useCart } from "../../Context/cartContext";

export const Cart = () => {
    const Cart = useCart();
    Cart.showCart();

    return(
        <div>
            <h1 className='cart_title'>Carrito</h1>
            <div className='cart_list'>
                <div className='cart_item__head'>
                    <span>Id</span>
                    <span>Nombre del Articulo</span>
                    <span>Cantidad</span>
                    <span>Precio</span>
                </div>
                {Cart.cart.map(( item, index ) => {
                    return (
                        <div key={index} className='cart_item'>
                            <span>{item.id}</span>
                            <span>{item.title}</span>
                            <span>
                                <button className='cart__qbtn cart__qbtn__sub' onClick={() => {
                                    Cart.subOne(item.id);
                                }}> <i class="fas fa-minus"></i> </button>
                                {item.quantity}
                                <button className='cart__qbtn cart__qbtn__add' onClick={() => {
                                    Cart.addOne(item.id);
                                }}> <i class="fas fa-plus"></i> </button>
                                <button className='cart__qbtn cart__qbtn__delete' onClick={() => {
                                    Cart.deleteFromCart(item.id);
                                }}><i class="far fa-trash-alt"></i></button>
                            </span>
                            <span>${item.price * item.quantity}</span>
                        </div>
                    )
                })}
            </div>
            <div className='cart_resume'>
                <button className='cart__btn_empty' onClick={() => {
                    Cart.emptyCart();
                }}>Tirar Carrito</button>
                <span className='cart__final_price'>
                    Total : ${Cart.getTotal()}
                </span>
            </div>
        </div>
    )
}