import React from "react";
import './Loader.css';

export const Loader = (props) => {

    return(
        <div className='loader__wrapper'>
            <span className='loader__message'>{props.msg}</span>
            <div className='loader'>
                <i class="fas fa-spinner loader__icon"></i>
            </div>
        </div>
    )
}