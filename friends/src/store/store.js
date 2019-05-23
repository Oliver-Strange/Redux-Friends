import { applyMiddleware, createStore } from "redux";
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;