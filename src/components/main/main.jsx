import React from "react";
import './main.scss';
import FormContainer from '../formContainer/formContainer';
import Text from '../generic/text/text'
import arrow from './arrow.png';
import { connect } from "react-redux";

import * as registerActions from "../../redux/actions/";

const Main = (props) => {
React.useEffect(()=>{
    props.getDirectoryTime()
console.log('test',props)
}, [])
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
      register: state.register.time,
    };
  };
  
  const mapDispatchToProps = {
    ...registerActions
  };
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Main);
