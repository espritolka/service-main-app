import actions from "../const";
import * as methods from '../../methods/index'

import axios from 'axios'

const domen = 'http://localhost:3000/api/'

export const getDirectoryTime = () => {
    return (dispatch) => {
        axios.get(`${domen}directory/time`)
            .then((response) => {
                dispatch({
                    type: actions.GET_DIRECTORY_TIME_SUCCESS,
                    payload: { data: methods.selectOptionsConverter(response.data) }
                });
            })
            .catch((error)=>{
                dispatch({
                    type: actions.GET_DIRECTORY_TYME_ERROR,
                    payload: error.response.data
                });
            })
    }
};

export const getDirectoryService = () => {
    return (dispatch) => {
        axios.get(`${domen}services`)
            .then((response) => {
                dispatch({
                    type: actions.GET_DIRECTORY_SERVICES_SUCCESS,
                    payload: {data: methods.selectOptionsConverterPrice(response.data)}
                });
            })
            .catch((error)=>{
                dispatch({
                    type: actions.GET_DIRECTORY_SERVICES_ERROR,
                    payload: error.response.data
                });
            })
    }
};

export const getMasters = (date, timeId) => {
    let dateReq = date.toISOString()
    return (dispatch) => {
        axios.get(`${domen}schedules/time/${timeId}/date/${dateReq}`)
            .then((response) => {
                dispatch({
                    type: actions.GET_MASTERS_SUCCESS,
                    payload: { data: response.data }
                });
            })
            .catch((error)=>{
                dispatch({
                    type: actions.GET_MASTERS_ERROR,
                    payload: error.response.data
                });
            })
    }
};

export const createRegister = (data) => {
    return (dispatch) => {
        axios.post(`${domen}registers/register`, data)
            .then((response) => {
                dispatch({
                    type: actions.CREATE_REGISTER_SUCCESS,
                    payload: { data: response.data }
                });
            })
            .catch((error)=>{
                dispatch({
                    type: actions.CREATE_REGISTER_ERROR,
                    payload: error.response.data.errors
                });
            })
    }
};

export const changeScheduleData = (label, value) => {
    return {
                    type: actions.CHANGE_SCHEDULE_DATA,
                    payload: {
                        label: label,
                        value: value
                    }    
          }
}

export const changeServiceData = (data) => {
    return {
                    type: actions.CHANGE_SERVICE_DATA,
                    payload: {
                        data: data
                    }    
          }
}

export const changeClientData = (label, value) => {
    return {
                    type: actions.CHANGE_CLIENT_DATA,
                    payload: {
                        label: label,
                        value: value
                    }    
          }
}

export const setAlert = (status) => {
    return {
        type: actions.SET_ALERT,
        payload: status
    }
}