
import {createStore, applyMiddleware} from 'redux';
import {HYDRATE,createWrapper} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';


const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV !== 'production'){
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}
    

const initialState = { 
    userLogin: {},
};

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
    const clientState = { ...state };
    const serverState = { ...action.payload };
    const nextState = { ...clientState, ...serverState };
    
    // const nextState = {
    //   ...state,
    //   users:{
    //     users:[...new Set([...action.payload.users.users, ...state.users.users])]
    //   }
    // }
        
    if(state){
        nextState.userLogin = initialState.userLogin;
    }
      // Result, blank page.
      return nextState;
    } else {
      return reducers(state, action)
    } 
  }



// create a makeStore function
const makeStore = context => createStore(masterReducer,bindMiddleware([thunkMiddleware]));

// export an assembled wrapper

export const wrapper = createWrapper(makeStore);
 