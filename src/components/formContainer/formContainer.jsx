import React from "react";
import Select from '../generic/select/select';
import Input from '../generic/input/input';
import Text from '../generic/text/text';
import DatePickerCastom from '../generic/datePicker/datePicker';
import ButtonMain from '../generic/button/button';
import PropTypes from 'prop-types';
import './formContainer.scss';
import StatusModal from '../statusModal/statusModal'



const FormContainer = (props) => {

const { time } = props

const [dataOptions, setDataOptions] = React.useState([{value:'1', label: 'test'},{value:'2', label: 'test2'}])
const [valueSelect, setValueSelect] = React.useState({value:'2', label: 'test2'})
const [open, setOpen] = React.useState(false)

const handleClickButton = () => {
    setOpen(true)
}
  
const handleChangeType = (value) => {
        setValueSelect(value)
    }

    const filter = (inputValue) =>
    dataOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

    const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filter(inputValue));
      }, 1000);
    });


    return(
        <div className = 'container'>
            <StatusModal status={open} onClose = {() => setOpen(false)} {...props}/>
            <form className = 'form-style'>
                <Text type='small'>Выберите</Text>
                <DatePickerCastom
                    id={'date'}
                    labelText={'Дата'}
                    error={ false }
                    value = {new Date()}
                    inputProps ={{
                        onChange: handleChangeType,
                        selectOptions: dataOptions,
            }}
                />
                <Select  
                    id={'time'}
                    labelText={'Время'}
                    error={ false }
                    loadOptions = {(inputValue, name) => promiseOptions(inputValue, name)}
                    inputProps ={{
                        value: valueSelect,
                        onChange: handleChangeType,
                        selectOptions: dataOptions,
                }}
                />
                <Select  
                    id={'master'}
                    labelText={'Мастер'}
                    error={ false }
                    loadOptions = {(inputValue, name) => promiseOptions(inputValue, name)}
                    inputProps ={{
                        value: valueSelect,
                        onChange: handleChangeType,
                        selectOptions: dataOptions,
                }}
                />
                <br/>
                <br/>
                <Text type='small'>Контактная информация</Text>
                <Input
                    id={'name'}
                    labelText={'ФИО'}
                    error={false}
                    inputProps ={{
                        value: 'test',
                        onChange: handleChangeType
                }}
                />
                <Input
                    id={'phone'}
                    labelText={'Телефон'}
                    error={false}
                    inputProps ={{
                        value: '',
                        onChange: handleChangeType
                }}
                />
                <Input
                    id={'email'}
                    labelText={'Email'}
                    error={false}
                    inputProps ={{
                        value: '',
                        onChange: handleChangeType
                }}
                />
            </form>
            <ButtonMain onClickButton = {() => handleClickButton()}>Записаться</ButtonMain>
        </div>
    )
}


FormContainer.propTypes = {
    time : PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired
    }))
}

export default FormContainer