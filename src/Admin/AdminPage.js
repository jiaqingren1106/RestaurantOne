import React from 'react';
import './AdminPage.css';
import PostsTable from './admin-components/PostsTable';
import AdminSidebar from './AdminSidebar';


class AdminPage extends React.Component {
    state = {page: 0}


    render() {
        let page
        switch (this.state.page) {
            case 0:
                page = <PostsTable />
                break
            case 1:
                page = <PostsTable />
                break
            case 2:
                page = <PostsTable />
                break
            case 3:
                page = <PostsTable />
                break
            case 4:
                page = <PostsTable />
                break
            default:
                page = <PostsTable /> 
                break
        }

        return (
            <div className='Adminpage'>
                <AdminSidebar/>
                {page}
            </div>
        );
    }
}

export default AdminPage;
