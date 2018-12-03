import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//
import {Provider} from 'react-redux';
import store from 'src/store/store';

//const StoreInstance = store();


ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));


