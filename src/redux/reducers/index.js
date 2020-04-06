import  {combineReducers}  from "redux";
import {registerReducer} from './register'


export default combineReducers({
  register: registerReducer,
});
