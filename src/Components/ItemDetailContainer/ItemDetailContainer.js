import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { getItemById } from "../../Firebase/config";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

    const params = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItemById(params.id)
            .then(res => {
                setItem(res);
            });
    },[params.id]);

    return(
        <div className='item_detail__wrapper'>
            {item ? <ItemDetail item={item} /> : <Loader msg='Cargando producto' /> }
        </div>
    )
}