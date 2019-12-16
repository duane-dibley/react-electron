import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './app';
import reducer from './reducers';

const store = createStore(
  reducer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appdiv')
);

// const sagaMiddleWare = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleWare, logger)
// );

// sagaMiddleWare.run(saga);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("appdiv")
// );
