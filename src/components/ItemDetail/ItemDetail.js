import React from "react";
import './ItemDetail.css';

export const ItemDetail = (props) => {

    return(
        <div className='item_details__container'>
            <div>
                <img className='item_details__image' src={props.item.image} />
            </div>
            <div className='item_detail__column'>
                <h1 className='item_detail__title'>{props.item.title}</h1>
                <span className='item_detail__price'>${props.item.price}</span>
                <p className='item_detail__description'>{props.item.description}</p>
            </div>
        </div>
    )
}