import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

export const Item = (props) => {

    return(
        <Link to={'/product/' + props.id } className='item_link'>
            <div key={props.id} className='item_container'>
                <img src={props.image} alt={'product-' + props.id}/>
                <div className='item_info_container'>
                    <span className='item_price'>${props.price}</span>
                    <span className='item_title'>{props.title}</span>
                </div>
            </div>
        </Link>
    )
}