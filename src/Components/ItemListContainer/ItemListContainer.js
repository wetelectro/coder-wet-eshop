import React from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useAsyncMock } from '../../Hooks/AsyncMockHook.js';
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = (props) => {
    const categoryId = useParams().id;
    const [items] = useAsyncMock(2000);

    return(
        <React.Fragment>
            <div className='greeting_background'>
                <img className='greeting_logo' src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_3_bllxal.png' alt='coderhouse'/>
                <span className='greeting_text'>"{props.greeting}"</span>
            </div>
            { items ? categoryId ? 
                <ItemList items={ items.filter((item) => { return item.categoryId.toString() === categoryId }) }/>
                :
                <ItemList items={ items }/>
                :
                <Loader msg='Cargando los productos'/>
            }
        </React.Fragment>
    )
}