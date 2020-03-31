import React from 'react';
import './button.scss'

const ButtonMain = (props) => {

    return (
        <div className ='button-box'>
            <button className="button-main" onClick={props.onClickButton}>
                <p className='button-text'>{props.children}</p></button>
        </div>
    )
}

export default ButtonMain;