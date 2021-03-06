import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/button.css';
import './styles/active.css';
import './styles/actions.css';
import './styles/profile.css';
import './styles/mini.css';
// import _all.scss to include all sass modules

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
