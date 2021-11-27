import React from "react";
import { Item } from "../Item/Item";
import { useAsyncMock } from '../../Hooks/AsyncMockHook.js';
import './ItemList.css';

export const ItemList = () => {
    const [items] = useAsyncMock(2000);

    return(
        <div className='item_list'>
            {items ? items.map((item) => {
                return(
                    <Item
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        title={item.title}
                    />
                )
            }) : 'Loading'}
        </div>
    )
}