import React from "react";
import './Cart.css';
import { useCart } from "../../Context/cartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const Cart = useCart();
    Cart.showCart();

    const ItemListHeaderDOM = (
        <div className='cart_item__head'>
            <span>Id</span>
            <span>Nombre del Articulo</span>
            <span>Cantidad</span>
            <span>Precio</span>
        </div>
    );

    const ItemListDOM = Cart.cart.map(( item, index ) => {
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
    });

    console.log('Carrito vacio ::: ' + Cart.isEmpty());

    return(
        <div>
            <h1 className='cart_title'>Carrito</h1>
            { !Cart.isEmpty() ? 
                <React.Fragment>
                    <div className='cart_list'>
                        { ItemListHeaderDOM }
                        { ItemListDOM }
                    </div>
                    <div className='cart_resume'>
                        <button className='cart__btn_empty' onClick={() => {
                            Cart.emptyCart();
                        }}>Tirar Carrito</button>
                        <span className='cart__final_price'>
                            Total : ${Cart.getTotal()}
                        </span>
                    </div>
                </React.Fragment>
                :
                <div className='cart__msg_empty'>
                    <span>El carrito esta vacio, para ir a la tienda haga <Link to='/'>Click Aqui</Link> </span>
                </div>
            }
        </div>
    )
}