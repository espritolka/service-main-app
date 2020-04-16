import React from 'react';
import './text.scss';
import PropTypes from "prop-types";

const Text = (props) => {

const { color, type, children } = props
    
    return (
    <p className={type + '-text'} style={{color: `${color}`}}>{children}</p>
    )
}

Text.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string,
    color: PropTypes.string
}

Text.defaultProps = {
    type: 'small',
    color: '#120E21'
}

export default Text