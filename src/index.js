import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
    <PostsTable />
    <UserTable />
    <RestaurantOwnerTable />
    <ReviewsTable />
  </React.StrictMode>,
    document.getElementById('root')
);


