import React from 'react';
import './AdminPage.css';
import PostsTable from './admin-components/PostsTable';
import ResaurantOwnerTable from './admin-components/RestaurantOwnerTable';
import ReviewsTable from './admin-components/ReviewsTable';
import UserTable from './admin-components/UserTable';


import AdminSidebar from './AdminSidebar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class AdminPage extends React.Component {
    state = {page: 0}

    
    useMeWhenOnClick = (pageNumber) => {
        this.setState({ 
            page: pageNumber
        })
    }


    render() {
       
      
        let page
        switch (this.state.page) {
            case 0:
                page = <PostsTable />
                break
            case 1:
                page = <UserTable />
                break
            case 2:
                page = <ResaurantOwnerTable />
                break
            case 3:
                page = <PostsTable />
                break
            case 4:
                page = <ReviewsTable />
                break
            default:
                page = <PostsTable /> 
                break
        }

        return (
            <Container className='Adminpage'>
                <Row>
                    <Col xs={3}>
                        <AdminSidebar onPageSelected = {this.useMeWhenOnClick}/>
                    </Col>
                    <Col xa={9}>
                        {page}
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default AdminPage;
