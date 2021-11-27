import React from "react";
import { useParams } from "react-router";
import { useAsyncMockById } from "../../Hooks/AsyncMockHook";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

    const params = useParams();
    const [item] = useAsyncMockById(2000, params.id);

    return(
        <div className='item_detail__wrapper'>
            {item ? <ItemDetail item={item} /> : 'Cargando...'}
        </div>
    )
}