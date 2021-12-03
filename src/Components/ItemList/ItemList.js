import React from "react";
import { Item } from "../Item/Item";
import './ItemList.css';

export const ItemList = (props) => {

    return(
        <div className='item_list'>
            {props.items ? props.items.map((item) => {
                return(
                    <Item
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        title={item.title}
                    />
                )
            }) : 'Loading products...'}
        </div>
    )
}