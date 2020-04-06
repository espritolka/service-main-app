import actions from "../const"

import axios from 'axios'

const domen = 'http://localhost:3000/api/'

export const getDirectoryTime = () => {
    return (dispatch) => {
        axios.get(`${domen}directory/time`)
            .then((response) => {
                dispatch({
                    type: actions.GET_DIRECTORY_TIME_SUCCESS,
                    payload: { data: response.data }
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
