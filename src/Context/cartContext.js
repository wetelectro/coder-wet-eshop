import React from "react";
import { useState } from "react/cjs/react.development";
import { addOrderToFirebase, getOrdersFromFirebase } from "../Firebase/config";

const CartContext = React.createContext([]);

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);

    // Load and save the cart locally
    window.addEventListener('load', () => {
        loadCartLocally();
    });
    window.addEventListener('beforeunload', () => {
        saveCartLocally();
    });

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
            return 0;
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
            return 0;
        });
        setCartItems(itemList);
    }

    const getTotal = () => {
        let total = 0;
        cartItems.map((item) => {
            total = total + (item.price * item.quantity);
            return 0;
        });
        return total;
    }

    const isInCart = (itemId) => {
        let exists = false;
        cartItems.map((item) => {
            if(item.id === itemId){
                exists = true;
            }
            return 0;
        })
        return exists;
    }

    const itemCount = () => {
        let total = 0;
        cartItems.map((item) => {
            total = total + item.quantity;
            return 0;
        })
        return total;
    }

    const emptyCart = () => {
        setCartItems([]);
    }

    const isEmpty = () => {
        if(cartItems <= 0){
            return true;
        }
        return false;
    }

    const showCart = () => {
        console.log(cartItems);
    }

    // Order Functions
    const pushOrder = (order) => {
        addOrderToFirebase(order)
            .then(() => {
                setOrders([...orders, order.orderId]);
            })
    }
    const getOrdersIds = () => {
        return orders;
    }
    const getOrderList = () => {
        getOrdersFromFirebase()
            .then( res => {
                return res;
            })
    }

    const saveCartLocally = () => {
        localStorage.setItem('cart-data', JSON.stringify(cartItems));
        localStorage.setItem('order-data', JSON.stringify(orders));
    }

    const loadCartLocally = () => {
        setCartItems(JSON.parse(localStorage.getItem('cart-data')));
        setOrders(JSON.parse(localStorage.getItem('order-data')));
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
            isInCart: isInCart,
            isEmpty: isEmpty,
            itemCount: itemCount,
            saveCart: saveCartLocally,
            loadCart: loadCartLocally,
            // Orders
            getMyOrders: getOrdersIds,
            pushOrder: pushOrder,
            getOrderList: getOrderList
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return React.useContext(CartContext);
}