import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Myfile from './Myfile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Myfile />, document.getElementById('root'));
registerServiceWorker();
