import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import './PostsTable.css';

class PostsRow extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "restaurant_id", "title", "content", "Ban/Unban", "Delete"],
         posts : [
             {id: "1", rest_id: "1", title:"Discount 10%", content: "Get your Discounts!", isBan: true},
             {id: "2", rest_id: "2", title:"Discount 20%", content: "Get your Discounts!", isBan: false},
             {id: "3", rest_id: "3", title:"Discount 30%", content: "Get your Discounts!", isBan: true},
             {id: "4", rest_id: "4", title:"Discount 40%", content: "Get your Discounts!", isBan: false},
         ]
     }
   }

   toggleBan(id){
      const updatePosts = this.state.posts
      for(let i = 0;  i < updatePosts.length; i++){
         if(updatePosts[i]["id"] === id){
            updatePosts[i]["isBan"] = !updatePosts[i]["isBan"]
         }
      }
      this.setState({posts: updatePosts})
   }

   isBanButtonRender(isBan, id){
      if(isBan){
         return <Button variant="secondary" block onClick={(id) => this.toggleBan(id)}>Unban</Button>
      } else{
         return <Button variant="dark" block onClick={(id) => this.toggleBan(id)}>Ban</Button>
      }
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
                  <Button variant="danger" block>Delete</Button>
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
  
   render() {
      return (
         <div>
            <h1 id='title'>Posts Table</h1>
            <Table striped bordered hover id='posts'>
               <thead>
                  <tr>{this.renderTableHeader()}</tr>
               </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </Table>
         </div>
      )
   }
}

export default PostsRow;