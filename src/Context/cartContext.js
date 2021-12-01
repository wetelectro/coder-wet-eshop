import React from "react";
import { useState } from "react/cjs/react.development";

const CartContext = React.createContext([]);

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        if(!isInCart(item.id)){
            setCartItems([...cartItems, {...item, quantity: quantity}]);
        }
    }

    const changeQuantityById = (itemId, change) => {
        let itemList = [...cartItems];
        itemList.map((item) => {
            if(item.id === itemId){
                if( (item.quantity + change) > 0 && (item.quantity + change) <= item.stock ){
                    item.quantity = item.quantity + change;
                }
            }
        });
        setCartItems(itemList);
    }

    const addOneById = (itemId) => {
        changeQuantityById(itemId, 1);
    }

    const subOneById = (itemId) => {
        changeQuantityById(itemId, -1);
    }

    const deleteFromCart = (itemId) => {
        let itemList = [...cartItems];
        itemList.map((item, index) => {
            if(item.id === itemId){
                itemList.splice(index,1);
            }
        });
        setCartItems(itemList);
    }

    const getTotal = () => {
        let total = 0;
        cartItems.map((item) => {
            total = total + (item.price * item.quantity);
        });
        return total;
    }

    const isInCart = (itemId) => {
        let exists = false;
        cartItems.map((item) => {
            if(item.id === itemId){
                exists = true;
            }
        })
        return exists;
    }

    const emptyCart = () => {
        setCartItems([]);
    }

    const showCart = () => {
        console.log(cartItems);
    }

    return(
        <CartContext.Provider value={{
            cart: cartItems,
            addToCart: addToCart,
            deleteFromCart: deleteFromCart,
            addOne: addOneById,
            subOne: subOneById,
            getTotal: getTotal,
            showCart: showCart,
            emptyCart: emptyCart,
            isInCart: isInCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return React.useContext(CartContext);
}