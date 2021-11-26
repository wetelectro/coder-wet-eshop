import React from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';

export const ItemListContainer = (props) => {

    return(
        <React.Fragment>
            <div className='greeting_background'>
                <img className='greeting_logo' src='https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_3_bllxal.png' alt='coderhouse'/>
                <span className='greeting_text'>"{props.greeting}"</span>
            </div>
            <ItemList />
        </React.Fragment>
    )
}