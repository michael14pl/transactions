import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash)

let store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));


serviceWorker.unregister();
