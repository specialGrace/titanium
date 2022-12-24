import { combineReducers } from 'redux'

import {userRegisterReducer, userLoginReducer} from "./userReducers";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default reducers;
