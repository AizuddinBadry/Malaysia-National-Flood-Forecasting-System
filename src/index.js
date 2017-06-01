import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Terengganu from './Terengganu';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<Terengganu />, document.getElementById('terengganu'));
registerServiceWorker();
