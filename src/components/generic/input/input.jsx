import React from "react";
import PropTypes from "prop-types";
import './input.scss';


const Input = ({ ...props }) => {

    const {
        labelText,
        id,
        error,
        inputProps,
        labelProps,
        onChange
    } = props

    var labelClassName = error ? 'error': 'def'


    return(
        <div className='form-control'>
              <label htmlFor={id} className={labelClassName}  {...labelProps}>{labelText}</label>
              <div  className='input-box'>
              <input
                id={id}
                name={id}
                className='input'
                onChange={ onChange }
                 {...inputProps}
              />
              </div>
        </div>
       
    )
}

export default Input