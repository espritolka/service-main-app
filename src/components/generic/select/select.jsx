import React from "react";
import './select.scss';
import AsyncSelect from 'react-select/async';


const Select = ({ ...props }) => {

    const {
        labelText,
        id,
        error,
        loadOptions,
        inputProps,
        labelProps,
        onChange
    } = props

    var labelClassName = error ? 'error': 'def';

    const customStyles = {
        option: (provided, state) => {
              console.log(provided, state)
              return {
            ...provided,
            borderColor: '#F64383',
            color: state.isSelected? '#FFF' : '#808080',
            backgroundColor: state.isSelected ? '#F64383' : '#FFF',
              }
        },
         control: (provided, state) => ({
            ...provided,
           '&:hover': {borderColor: "#F64383"},
           boxShadow:  state.isFocused ? '0 0 1px #F64383' : 'none',
           borderColor: state.isFocused ? '#F64383' : '#CCCCCC'
        })
   
    }

    return(
        <div className='form-control'>
            <label htmlFor={id} className={labelClassName}  {...labelProps}>{labelText}</label>
            <AsyncSelect
                id={id}
                name={id}
                loadOptions={(inputValue) => loadOptions(inputValue, id)}
                onChange={ onChange }
                styles={customStyles}
                defaultOptions
                {...inputProps}
      />
        </div>
    )
}


export default Select