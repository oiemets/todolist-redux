import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import todoReducer from './store/todoReducer';
import rootReducer from './store/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);


