import React from "react";
import './main.scss';
import FormContainer from '../formContainer/formContainer';
import Text from '../generic/text/text'
import arrow from './arrow.png';
import { connect } from "react-redux";

import * as registerActions from "../../redux/actions/";

const Main = (props) => {


    return(
        <main className = 'App-main'>
         <div className = 'right-box'><Text type='big'>Запишитесь онлайн</Text>
            <img  src={arrow} className='arrow' alt="..."/>
         </div>
         <FormContainer {...props}/>
        </main>
    )
}


const mapStateToProps = state => {
    return {
      time: state.register.time,
      masters: state.register.masters,
      services: state.register.services,
      data: state.register.data,
      alertCustom: state.register.alertCustom,
      error: state.register.error
    };
  };
  
  const mapDispatchToProps = {
    ...registerActions
  };
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Main);
