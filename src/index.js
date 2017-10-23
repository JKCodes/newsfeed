import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Elements } from './theme'
import { Provider } from 'react-redux'
import store from './stores'

const app = (
  <Provider store={store.configure(null)}>
    <Elements />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))