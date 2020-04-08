import React, { useEffect, useState } from "react";
import Select from '../generic/select/select';
import Input from '../generic/input/input';
import Text from '../generic/text/text';
import DatePickerCastom from '../generic/datePicker/datePicker';
import ButtonMain from '../generic/button/button';
import PropTypes from 'prop-types';
import './formContainer.scss';
import StatusModal from '../statusModal/statusModal'



const FormContainer = (props) => {

const { data, time, services, masters, changeClientData, setAlert, changeScheduleData, 
        changeServiceData, getDirectoryTime, getDirectoryService, getMasters, createRegister } = props

    useEffect(() => {
        getDirectoryTime();
        getDirectoryService();
    }, [])

    useEffect(() => {

        data.schedule.time._id && data.schedule.date && getMasters(data.schedule.date, data.schedule.time._id)

    }, [data.schedule.time._id, data.schedule.date])


const handleClickButton = () => {
    createRegister(data)
}

    return(
        <div className = 'container'>
            <StatusModal onClose = {() => setAlert(false)} {...props}/>
            <form className = 'form-style'>
                <Text type='small'>Выберите</Text>
                <DatePickerCastom
                    id={'date'}
                    labelText={'Дата'}
                    error={ false }
                    value = {data.schedule.date}
                    onChange = {(value) => changeScheduleData('date', value)}
                />
               <Select  
                    id={'time'}
                    labelText={'Время'}
                    error={ false }
                    inputProps ={{
                        value: data.schedule.time,
                        onChange: (value) => { changeScheduleData('time', value) },
                        selectOptions: time,
                }}
                />
                <Select  
                    id={'master'}
                    labelText={'Мастер'}
                    error={ false }
                    inputProps ={{
                        value: data.schedule.master,
                        onChange: (value) => { changeScheduleData('master', value) },
                        selectOptions: masters,
                }}
                />
                 <Select  
                    id={'service'}
                    labelText={'Услуга'}
                    error={ false }
                    inputProps ={{
                        value: data.service,
                        onChange: (value) => { changeServiceData( value ) },
                        selectOptions: services,
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
                        value: data.client.name,
                        onChange: (e) => changeClientData('name',e.target.value)
                }}
                />
                <Input
                    id={'phone'}
                    labelText={'Телефон'}
                    error={false}
                    inputProps ={{
                        value: data.client.phone,
                        onChange: (e) => changeClientData('phone',e.target.value)
                }}
                />
                <Input
                    id={'email'}
                    labelText={'Email'}
                    error={false}
                    inputProps ={{
                        value: data.client.email,
                        onChange: (e) => changeClientData('email',e.target.value)
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