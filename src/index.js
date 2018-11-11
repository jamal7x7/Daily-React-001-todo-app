import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import TodoApp from './components/TodoApp'
// import TodoApp01 from './playground/TodoApp01'
import TodoApp02 from './playground/TodoApp02'
// import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<TodoApp02 />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
