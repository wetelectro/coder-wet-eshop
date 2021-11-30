import React, { useEffect, useState } from "react";
import './ItemDetail.css';
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
    const [itemQuantity, setItemQuantity] = useState(0);

    useEffect(() => {
        console.log(itemQuantity);
    },[itemQuantity]);

    const onAdd = (numberOfItems) => {
        setItemQuantity(numberOfItems);
    }

    return(
        <div className='item_details__container'>
            <div>
                <img className='item_details__image' alt={props.item.title} src={props.item.image} />
            </div>
            <div className='item_detail__column'>
                <h1 className='item_detail__title'>{props.item.title}</h1>
                <span className='item_detail__price'>${props.item.price}</span>
                <p className='item_detail__description'>{props.item.description}</p>
                <ItemCount 
                    stock={props.item.stock}
                    addToCart={onAdd}
                />
            </div>
        </div>
    )
}