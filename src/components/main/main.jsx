import React from "react";
import './main.scss';
import FormContainer from '../formContainer/formContainer';
import Text from '../generic/text/text'


const Main = (props) => {

    return(
        <main className = 'App-main'>
         <div className = 'right-box'><Text type='big'>Запишитесь онлайн</Text></div>
         <FormContainer/>
        </main>
    )
}

export default Main