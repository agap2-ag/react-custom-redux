import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css' // layout
import * as serviceWorker from './serviceWorker'
import Chat from './chat/chat'

ReactDOM.render(<Chat />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
