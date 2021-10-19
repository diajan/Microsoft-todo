import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'
import { initialStorage } from 'tools/other/localstorage'

initialStorage()

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
)
