import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {
    createStore,
    // applyMiddleware,
    compose
} from "redux";
import MainReducer from "./reducers/MainReducer";
import App from './App';
import * as serviceWorker from './serviceWorker';

/*We use compose just for enabling the redux 
devTools Extension, and the Provider component 
from react-redux library is responsive 
to connect everything from react and redux.
*/
const store = compose(window.devToolsExtension
    ? window.devToolsExtension() : f => f)(createStore)(MainReducer)


ReactDOM.render(<Provider store={store} >
                    <App />
                </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
