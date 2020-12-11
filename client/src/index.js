import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MapContainer from "./react-components/MapContainer/MapContainer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {routeState, userState} from "./redux/reducer";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";

import {BrowserRouter} from "react-router-dom";

const logger = createLogger()


const rootReducer = combineReducers({routeState, userState})
const store = createStore(rootReducer, applyMiddleware(logger))



ReactDOM.render(

  <React.StrictMode>

      <Provider store = {store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>

    {/* <PostsTable/> */}
  </React.StrictMode>,
    document.getElementById('root')
);


