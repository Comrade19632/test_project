import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    startup
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.register()