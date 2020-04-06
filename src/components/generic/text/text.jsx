import React from 'react';
import './text.scss';
import PropTypes from "prop-types";

const Text = (props) => {
    
    return (
    <p className={props.type + '-text'}>{props.children}</p>
    )
}

Text.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string
}

Text.defaultProps = {
    type: 'small'
}

export default Text