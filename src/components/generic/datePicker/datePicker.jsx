import React, {useState} from 'react';
import PropTypes from 'prop-types'
import './datePicker.scss';
import {
    ThemeProvider,
    createMuiTheme,
  } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from "moment-timezone";

import ruLocale from "date-fns/locale/ru";

const primaryColor = '#F64383';
const secondaryColor = '#FFB1CD';
const textColor = '#000000';
const defaultColor = '#CCCCCC';



const materialTheme = createMuiTheme({
    palette: {
		primary: {
			main: primaryColor,
			light:  defaultColor,
			dark: textColor,
		},
		secondary: {
			main: secondaryColor
		},
	},
    overrides: {
        MuiFormControl: {
            marginNormal: {
                marginTop: '0px',
                marginBottom: '0px'
            },
        },
        MuiInputBase: {
            input: {
                'padding': '6px 0 0px',
            },
            root: {
                'letter-spacing': '0.00938em',
                'font-family': '"Red Hat Display", sans-serif',
                'font-weight': 400,
                'line-height': '1.1875em',
            }   
        },
        MuiOutlinedInput: {
            root: {
                'width' : '100%',
                height: '38px',
                    '&:hover': {
                        'border-width': '1px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                'border-color': primaryColor,
                                'border-width': '1px'
                            }
                    }, 
                    '&.Mui-focused': {
                       '& .MuiOutlinedInput-notchedOutline' :{
                          'border-width': '1px'
                       }
                    }
            },
            notchedOutline: {
                
            }         
        },
       
    }
});




const DatePickerCastom = ({...props}) => {

    const {
        labelText,
        id,
        error,
        inputProps,
        value,
        labelProps,
        onChange
    } = props

    var labelClassName = error ? 'error': 'def'

    const [startDate, setStartDate] = useState(value);
    const [focusedInput, setFocusedInput] = useState(false)

    return(
        <div className='form-control'>
           <label htmlFor={id} className={labelClassName}  {...labelProps}>{labelText}</label>
           <ThemeProvider theme={materialTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale = {ruLocale}>
                        <KeyboardDatePicker
                           disableToolbar
                           inputVariant ="outlined"
                            moment={ moment.tz.setDefault('MSK')}
                           // helperText={ error }
                            error={ error }
                            labelText={false}
                            margin="normal"
                            id={ id }
                            label={ false}
                            minDate = {new Date()}
                            minDateMessage = {"Дата записи не может быть менее ранее сегодняшнего дня"}
                            format="dd.MM.yyyy"
                            clearLabel="очистить"
                            cancelLabel="отменить"
                            value={ value }
                            onChange={onChange}
                            className={'picker-box'}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    </ThemeProvider>
         </div>
    )
}

DatePickerCastom.propTypes = {
    onChange: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
  }

DatePickerCastom.defaultProps = {
    value: new Date(),
    id: 'new',
};

export default DatePickerCastom;