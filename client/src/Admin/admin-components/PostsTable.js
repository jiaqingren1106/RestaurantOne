import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

class PostsTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "restaurant_id", "title", "content", "Ban/Unban", "Delete"],
         posts : [
             {id: 1, rest_id: 1, title:"Discount 10%", content: "Get your Discounts!", isBan: true},
             {id: 2, rest_id: 2, title:"Discount 20%", content: "Get your Discounts!", isBan: false},
             {id: 3, rest_id: 3, title:"Discount 30%", content: "Get your Discounts!", isBan: true},
             {id: 4, rest_id: 4, title:"Discount 40%", content: "Get your Discounts!", isBan: false},
         ]
     }
   }

   toggleButton(id){
      let updatingPosts = this.state.posts;
      for (let i = 0; i < this.state.posts.length; i++){
         if(updatingPosts[i]["id"] === id){
            updatingPosts[i]["isBan"] = !updatingPosts[i]["isBan"]
            // alert("isBan of " + id +"becomes "+ updatingPosts[i]["isBan"])
         }
      }
      this.setState({posts: updatingPosts})
   }

   isBanButtonRender(isBan, id){
      if(isBan){
         return <Button variant="secondary" block onClick={() => this.toggleButton(id)}>Unban</Button>
      } else{
         return <Button variant="dark" block onClick={() => this.toggleButton(id)}>Ban</Button>
      }
   }

   deletePosts(id){
      let updatingPosts = this.state.posts;
      for (let i = 0; i < this.state.posts.length; i++){
          if(updatingPosts[i]["id"] === id){
              updatingPosts.splice(i, 1);
          }
      }
      this.setState({users: updatingPosts})
 }

    renderTableData() {
      return this.state.posts.map((post) => {
         const { id, rest_id, title, content , isBan} = post //destructuring

         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{rest_id}</td>
               <td>{title}</td>
               <td>{content}</td>
               <td>
                  {this.isBanButtonRender(isBan, id)}
               </td>
               <td>
                  <Button variant="danger" block onClick={()=>this.deletePosts(id)}>Delete</Button>
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