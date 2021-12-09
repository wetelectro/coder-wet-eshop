import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { getItemById } from "../../Firebase/config";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {

    const params = useParams();
    const [item, setItem] = useState(null);
    const [itemDontExists, setItemDontExists] = useState(false);

    useEffect(() => {
        let response = null;
        getItemById(params.id)
            .then(res => {
                response = res;
                setItem(res);
            })
            .finally(() => {
                if(response === undefined){
                    console.log('El item no existe');
                    setItemDontExists(true);
                }
            });
    },[params.id]);

    const noItemMessage = (
                <div className='item_no_found'>
                    <p>El producto no se ha encontrado.</p>
                </div>
    );

    return(
        <div className='item_detail__wrapper'>
            {/* {item ? <ItemDetail item={item} /> : <Loader msg='Cargando producto' /> } */}
            { !item && !itemDontExists ? <Loader msg='Cargando producto'/> : '' }
            { item && !itemDontExists  ? <ItemDetail item={item} /> : '' }
            { !item && itemDontExists  ? noItemMessage : '' }
        </div>
    )
}