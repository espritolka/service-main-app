import { registerReducer } from './register';
import ReactDOM from 'react-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import { changeScheduleData, changeServiceData, changeClientData, createRegister } from '../actions/index'

jest.mock('axios')
describe('data changed', () => {

it('schedule should be chenged', () => {
    //1. test data
    let action = changeScheduleData('master', {value: '123', label:'testMaster'});

    let state = {
        data: {
            schedule : {
                        _id : "",
                        master : {
                                 _id : "",
                                 name : "",
                                 value : "",
                                 label : "default"
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
                    }
       }
    };

    //2. action
    let newState = registerReducer(state, action);

    //3. expectation

    expect(newState.data.schedule.master.value).toBe('123');
    expect(newState.data.schedule.master.label).toBe('testMaster');
});

it('service should be chenged', () => {
    //1. test data
    let action = changeServiceData({name: 'Test Service', _id: '12345qwe', price: '1000'});

    let state = {
        data: {
            service : {
                _id : "11",
                name : "",
                price : "",
            },
       }
    };

    //2. action
    let newState = registerReducer(state, action);

    //3. expectation

    expect(newState.data.service.name).toBe('Test Service');
    expect(newState.data.service._id).toBe('12345qwe');
});

it('client should be chenged', () => {
    //1. test data
    let action = changeClientData('email','testEmail@adr.ru');

    let state = {
        data: {
            client : {
                email : "def@adr.ru",
                name : "def",
                phone : ""
            }
       }
    };

    //2. action
    let newState = registerReducer(state, action);

    //3. expectation

    expect(newState.data.client.email).toBe('testEmail@adr.ru');
});
    
})

// test('register shold be created', async () => {
//     //1. test data
//    let data = { test: '' }
//    const resp = { data: 'ok' }
//      axiosMock.post.mockImplementationOnce(() => Promise.resolve(resp))
//     let action = await createRegister(data);

//     let state = {
//         error: {},
//         alertCustom: false,
//         data: {
//             schedule : {
//                         _id : "",
//                         master : {
//                                  _id : "",
//                                  name : "",
//                                  value : "",
//                                  label : ""
//                                 },
//                         time : {  
//                                 _id : "",
//                                 type : "",
//                                 label : "",
//                                 value: ""
//                                },
//                         date: new Date(),
//                         free: true,
//                         register: {
//                                 id :null
//                                   },
//                     },
//             service : {
//                         _id : "",
//                         name : "",
//                         price : "",
//                     },
//             client : {
//                         email : "",
//                         name : "",
//                         phone : ""
//                     }
//     }
//     };

//     //2. action
//     let newState = await registerReducer(state, action);
  
//     //3. expectation

//     await expect(newState.alertCustom).toBe(true);
// });

