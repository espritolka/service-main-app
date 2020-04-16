import React from 'react';
import ReactDOM from 'react-dom';
import StatusModal from '../statusModal';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

afterEach(cleanup)
it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<StatusModal/>, div)
});
 
it('renders modal correctly', () => {
const { getByTestId } = render(<StatusModal alertCustom = {true} data = {{
    schedule : {
                _id : "123",
                master : {
                         _id : "13",
                         name : "Test Master Name",
                         value : "13",
                         label : "Test Master Name"
                        },
                time : {  
                        _id : "12",
                        type : "time",
                        label : "10.00",
                        value: "12"
                       },
                date: new Date(),
                free: true,
                register: {
                        id :null
                          },
            },
    service : {
                _id : "123",
                name : "Test Service",
                price : "1000",
            },
    client : {
                email : "test@mail.ru",
                name : "Test Test",
                phone : "1234567890"
            }
}} />);

expect(getByTestId('modal')).toHaveTextContent('Test Master Name')
});

it('should be closed', () => {
    const { getByTestId } = render(<StatusModal alertCustom = {false} data = {{
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
    }}/>)
    expect(getByTestId('modal')).toBeEmpty();
})