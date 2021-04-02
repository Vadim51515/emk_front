import {applyMiddleware, combineReducers, createStore} from 'redux';
import  thunkMiddleWare from 'redux-thunk'
import AppReducer from './AppReducer';
import NewsReducer from './NewsReducer';
let reducers = combineReducers({
    appReducer: AppReducer,
    newsReducer: NewsReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
