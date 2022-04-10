import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Redux/reducers";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import History from "./History";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "mapbox-gl/dist/mapbox-gl.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={History}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
