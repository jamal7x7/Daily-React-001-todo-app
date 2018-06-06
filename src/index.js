import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.sass'
import TodoApp from './components/TodoApp';
//import './components/App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
