import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)


ReactDOM.render(< App />, document.getElementById('root'));


serviceWorker.unregister();
