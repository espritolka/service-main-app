import actions from "../const"

const defaultState = {
    time: [{ value: '', label: '' }],
    services: [{ value: '', label: '' }],
    masters: [{ value: '', label: '' }],
    alertCustom: false,
    error: {
        data: {},
        master: '',
        time: ''
    },
    data: {
            schedule : {
                        _id : "",
                        master : {
                                 _id : "",
                                 name : "",
                                 value : "",
                                 label : ""
                                },
                        time : {  
                                _id : "",
                                type : "",
                                label : "",
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
                        name : "",
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
            return { ...state, alertCustom: action.payload, data: defaultState.data };
        
        case actions.GET_DIRECTORY_TIME_SUCCESS:
            return { ...state, time: [...action.payload.data],  error: {...state.error, time:[]}};
        
        case actions.GET_DIRECTORY_TIME_ERROR:
            return { ...state, time: [{_id: null, label: null}], error: { ...state.error, time: action.payload }}
            
        case actions.GET_DIRECTORY_SERVICES_SUCCESS:
            return { ...state, services: [...action.payload.data],  error: {...state.error, services:[]}};
            
        case actions.GET_DIRECTORY_SERVICES_ERROR:
            return { ...state, services: [{_id: null, label: null}], error: { ...state.error, services: action.payload }}

        case actions.GET_MASTERS_SUCCESS:
            return { ...state, masters: [...action.payload.data],   error: {...state.error, masters:[]} };

        case actions.GET_MASTERS_ERROR:
            return { ...state, masters: [{_id: null, label:null}], error: {...state.error, masters: action.payload }}

        case actions.CREATE_REGISTER_SUCCESS:
            return { ...state, masters: defaultState.masters, alertCustom: true, error: {} };
            
        case actions.CREATE_REGISTER_ERROR:
            return { ...state, error: {...state.error, data : action.payload }};
            
        case actions.CHANGE_SCHEDULE_DATA:
            return { ...state, data: { ...state.data, 
                        schedule: { ...state.data.schedule, [ action.payload.label ]:  action.payload.value }}}                   
                    
        case actions.CHANGE_SERVICE_DATA:
            return { ...state, data: { ...state.data, 
                       service: action.payload.data}} 

        case actions.CHANGE_CLIENT_DATA:
            return { ...state, data: { ...state.data, 
                       client: { ...state.data.client, [action.payload.label]: action.payload.value}}} 

    }
    return state;
};