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


// const unsubscribe = store.subscribe(() => {
//     const state = store.getState();
//     console.log(state.transactions.transactions1, state.filters.sortBy)
//     const transactions1 = getVisibleBooks(state.transactions.transactions1, state.filters.sortBy);
//     const transactions2 = getVisibleBooks(state.transactions.transactions2, state.filters.sortBy);
// });


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));


serviceWorker.unregister();
