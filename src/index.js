import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, combineReducers, applyMiddleware} from "redux";
import {routeState, userState} from "./redux/reducer";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";
import BlogPage from "./pages/BlogPage";
import RestaurantPage from "./pages/RestaurantPage";
import Post from "./react-components/Post";
import FirstPage from "./pages/FirstPage";
import StartUp from "./fontPages/StartUp";
const logger = createLogger()

const rootReducer = combineReducers({routeState, userState})
const store = createStore(rootReducer, applyMiddleware(logger))



ReactDOM.render(

  <React.StrictMode>

      <Provider store = {store}>
          <RestaurantPage />
      </Provider>

    {/* <PostsTable/> */}
  </React.StrictMode>,
    document.getElementById('root')
);


