import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from "redux";
import {appState} from "./redux/reducer";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";

const logger = createLogger()
const store = createStore(appState, applyMiddleware(logger))
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import SignIn from "./fontPages/SignIn";
import AdminPage from "./Admin/AdminPage"
import PostsTable from "./Admin/admin-components/PostsTable"
import UserTable from "./Admin/admin-components/UserTable"


ReactDOM.render(

  <React.StrictMode>

      <Provider store = {store}>
          <App/>
      </Provider>

    {/* <PostsTable/> */}
  </React.StrictMode>,
    document.getElementById('root')
);


