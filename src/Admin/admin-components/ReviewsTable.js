import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

class ReviewsTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "User id", "Restaurant id", "content", "Ban/Unban", "Delete"],
         reviews : [
             {id: 1, user_id: 1, rest_id:1, content: "This is an awesome deal!", isBan: false},
             {id: 2, user_id: 1, rest_id:2, content: "This is an awesome deal!", isBan: false},
             {id: 3, user_id: 1, rest_id:3, content: "This is an awesome deal!", isBan: false},
             {id: 4, user_id: 1, rest_id:4, content: "This is an awesome deal!", isBan: false},
         ]
     }
   }

   toggleButton(id){
      let updatingReviews = this.state.reviews;
      for (let i = 0; i < this.state.reviews.length; i++){
         if(updatingReviews[i]["id"] === id){
            updatingReviews[i]["isBan"] = !updatingReviews[i]["isBan"]
         }
      }
      this.setState({reviews: updatingReviews})
   }

   isBanButtonRender(isBan, id){
      if(isBan){
         return <Button variant="secondary" block onClick={() => this.toggleButton(id)}>Unban</Button>
      } else{
         return <Button variant="dark" block onClick={() => this.toggleButton(id)}>Ban</Button>
      }
   }

   deleteReviews(id){
      let updatingReviews = this.state.reviews;
      for (let i = 0; i < this.state.reviews.length; i++){
          if(updatingReviews[i]["id"] === id){
              updatingReviews.splice(i, 1);
          }
      }
      this.setState({users: updatingReviews})
 }

    renderTableData() {
      return this.state.reviews.map((review) => {
         const {id, user_id, rest_id, content, isBan} = review //destructuring

         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{user_id}</td>
               <td>{rest_id}</td>
               <td>{content}</td>
               <td>
                  {this.isBanButtonRender(isBan, id)}
               </td>
               <td>
                  <Button variant="danger" block onClick={()=>this.deleteReviews(id)}>Delete</Button>
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
         <div id="post_table">
            <h1 id='title'>Reviews Table</h1>
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