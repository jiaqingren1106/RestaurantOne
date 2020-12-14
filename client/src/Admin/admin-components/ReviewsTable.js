import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';
import {getAllReview, deleteReviewAdmin} from "../../Action/reviewAction"; 

class ReviewsTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "User id", "Restaurant id", "content", "Delete"],
         reviews : [
             {_id: 1, user: 1, rest_id:1,  review: "This is an awesome deal!"},
             {_id: 2, user: 1, rest_id:2,  review: "This is an awesome deal!"},
             {_id: 3, user: 1, rest_id:3,  review: "This is an awesome deal!"},
             {_id: 4, user: 1, rest_id:4,  review: "This is an awesome deal!"},
         ]
     }
     getAllReview(this)
   }


   deleteReviews(id){
      let updatingReviews = this.state.reviews;
      for (let i = 0; i < this.state.reviews.length; i++){
          if(updatingReviews[i]["_id"] === id){
              updatingReviews.splice(i, 1);
          }
      }
      deleteReviewAdmin(id);

      this.setState({users: updatingReviews})
 }

    renderTableData() {
      return this.state.reviews.map((reviews) => {
         const {_id, user, rest_id, review} = reviews //destructuring

         return (
            <tr key={_id}>
               <td>{_id}</td>
               <td>{user}</td>
               <td>{rest_id}</td>
               <td>{review}</td>
               <td>
                  <Button variant="danger" block onClick={()=>this.deleteReviews(_id)}>Delete</Button>
               </td>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = this.state.header
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   emptyNotification(){
      if(this.state.reviews.length === 0){
         return(
            <Alert variant={'secondary'}>
               There are no reviews in Restaurant Reviewer
            </Alert>
         )
      }
   }
  
   render() {
      return (
         <div class="table">
            <h1 class='title'>Reviews Table</h1>
            <Table striped bordered hover id='reviews' size='sm'>
               <thead>
                  <tr>{this.renderTableHeader()}</tr>
               </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </Table>
            {this.emptyNotification()}
         </div>
      )
   }
}

export default ReviewsTable;