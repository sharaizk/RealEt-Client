import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './Redux/reducers'
import reduxThunk from 'redux-thunk'
import { BrowserRouter } from "react-router-dom";
import History from "./History";
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={History}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
