import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Header from './components/Header';
import reducers from './reducers';
import AddRestaurant from './components/form/AddRestaurant';
import { HOME, NEW_RESTAURANT } from './paths';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route path={HOME} exact component={App} />
      <Route path={NEW_RESTAURANT} exact component={AddRestaurant} />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
