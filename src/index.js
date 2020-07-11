import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers'; // 这里的 rootReducer 也可以改成别的名字

// Create Store Obj
const store = createStore(rootReducer);

// render
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
