import React from 'react';
import './text.scss';

const Text = (props) => {
    
    return (
    <p className={props.type + '-text'}>{props.children}</p>
    )
}

export default Text