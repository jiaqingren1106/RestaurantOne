import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import {appState} from "./redux/reducer";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";

const logger = createLogger()
const store = createStore(appState, applyMiddleware(logger))

ReactDOM.render(

  <React.StrictMode>
      <Provider store = {store}>
          <App/>
      </Provider>
  </React.StrictMode>,
    document.getElementById('root')
);


