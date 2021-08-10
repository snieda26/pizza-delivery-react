import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

alert('use command "yarn server" to start fake json server !')
ReactDOM.render(
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

