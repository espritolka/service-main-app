import React from "react";
import './main.scss';
import FormContainer from '../formContainer/formContainer';
import Text from '../generic/text/text'
import arrow from './arrow.png'  

const Main = (props) => {

    return(
        <main className = 'App-main'>
         <div className = 'right-box'><Text type='big'>Запишитесь онлайн</Text>
            <img  src={arrow} className='arrow' alt="..."/>
         </div>
         <FormContainer/>
        </main>
    )
}

export default Main