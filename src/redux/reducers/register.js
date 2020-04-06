import actions from "../const"

const defaultState = {
    time: [{_id: null, label:null}],
    alertCustom: false,
    error: {},
    data: {
            schedule : {
                        _id : "",
                        master : {
                                 _id : "",
                                 name : "Дима",
                                 value : "",
                                 label : ""
                                },
                        time : {  
                                _id : "",
                                type : "",
                                label : "11.00",
                                value: ""
                               },
                        date: new Date(),
                        free: true,
                        register: {
                                id :null
                                  },
                    },
            service : {
                        _id : "",
                        name : "Маникюр классический",
                        price : "",
                    },
            client : {
                        email : "",
                        name : "",
                        phone : ""
                    }
    }
};

export const registerReducer = function(state = defaultState, action) {

    if (!action){
        return state
    }
    switch (action.type) {

        case 'SET_ALERT':
            return {...state, alertCustom: action.payload};
        
        case actions.GET_DIRECTORY_TIME_SUCCESS:
            return {...state, time: [...action.payload.data]};
        
        case actions.GET_DIRECTORY_TIME_ERROR:
            return {...state, time: [], error: {time: action.payload}}

    }
    return state;
};