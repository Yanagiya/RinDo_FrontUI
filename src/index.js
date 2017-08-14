import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<Root />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
