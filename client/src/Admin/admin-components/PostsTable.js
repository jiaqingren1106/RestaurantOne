import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';
import {getAllPost, deletePostAdmin} from "../../Action/postAction";


class PostsTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "restaurant_id", "title", "content", "Delete"],
         posts : [
             {_id: 1, rest_id: 1, title:"Discount 10%", description: "Get your Discounts!"},
             {_id: 2, rest_id: 2, title:"Discount 20%", description: "Get your Discounts!"},
             {_id: 3, rest_id: 3, title:"Discount 30%", description: "Get your Discounts!"},
             {_id: 4, rest_id: 4, title:"Discount 40%", description: "Get your Discounts!"},
         ]
     }
     getAllPost(this)
   }
  

   deletePosts(id){
      let updatingPosts = this.state.posts;
      for (let i = 0; i < this.state.posts.length; i++){
          if(updatingPosts[i]["_id"] === id){
              updatingPosts.splice(i, 1);
          }
      }

      deletePostAdmin(id)

      this.setState({users: updatingPosts})
 }

    renderTableData() {
      return this.state.posts.map((post) => {
         const { _id, rest_id, title, description} = post //destructuring

         return (
            <tr key={_id}>
               <td>{_id}</td>
               <td>{rest_id}</td>
               <td>{title}</td>
               <td>{description}</td>
               
               <td>
                  <Button variant="danger" block onClick={()=>this.deletePosts(_id)}>Delete</Button>
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
      if(this.state.posts.length === 0){
         return(
            <Alert variant={'secondary'}>
               There are no posts in Restaurant Reviewer
            </Alert>
         )
      }
   }
  
   render() {
      return (
         <div class="table">
            <h1 class='title'>Posts Table</h1>
            <Table striped bordered hover id='posts' size='sm'>
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

export default PostsTable;