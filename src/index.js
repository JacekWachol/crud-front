import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';


const logger = store => next => (action) => {
    console.log('Redux logger:');
    console.group(action.type);
    console.info('Dispatching', action);
    let result = next(action);
    console.log('Next state', store.getState());
    console.groupEnd(action.type);
    return result;
};
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
