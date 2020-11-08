import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import SignIn from "./fontPages/SignIn";
import AdminPage from "./Admin/AdminPage"
import PostsTable from "./Admin/admin-components/PostsTable"

ReactDOM.render(

  <React.StrictMode>
    <PostsTable/>
  </React.StrictMode>,
    document.getElementById('root')
);


