import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleWare from 'redux-thunk'
import AppReducer from './AppReducer';
let reducers = combineReducers({
    appReducer: AppReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
