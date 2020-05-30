import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Authentication from './services/Authentication';

import store from './store';
import Provider from "react-redux/es/components/Provider";

Authentication.configure();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
