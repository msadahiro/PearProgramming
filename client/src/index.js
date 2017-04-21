import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// Username check
if (!localStorage.getItem('username')){
  const username = prompt('Please enter a username');
  localStorage.setItem('username', JSON.stringify(username));
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
