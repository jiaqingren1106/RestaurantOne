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
import RestaurantOwnerTable from "./Admin/admin-components/RestaurantOwnerTable"
import ReviewsTable from "./Admin/admin-components/ReviewsTable"


ReactDOM.render(

  <React.StrictMode>
<<<<<<< HEAD
    <PostsTable />
    <UserTable />
    <RestaurantOwnerTable />
    <ReviewsTable />
=======

      <Provider store = {store}>
          <App/>
      </Provider>

    {/* <PostsTable/> */}
>>>>>>> e95738a37173c181b0f17c72953443ebf0c68b80
  </React.StrictMode>,
    document.getElementById('root')
);


