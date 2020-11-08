import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

class RestaurantOwnerTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "Restaurant Name", "address", "email", "Ban/Unban", "Delete"],
         restaurantOwner : [
             {id: 1, name: "KFC", address:"Toronto", email: "kfc@gmail.com", isBan: false},
             {id: 2, name: "KFC", address:"Toronto", email: "kfc@gmail.com", isBan: false},
             {id: 3, name: "KFC", address:"Toronto", email: "kfc@gmail.com", isBan: false},
             {id: 4, name: "KFC", address:"Toronto", email: "kfc@gmail.com", isBan: false},
         ]
     }
   }

   toggleButton(id){
      let updatingRestaurantOwner = this.state.restaurantOwner;
      for (let i = 0; i < this.state.restaurantOwner.length; i++){
         if(updatingRestaurantOwner[i]["id"] === id){
            updatingRestaurantOwner[i]["isBan"] = !updatingRestaurantOwner[i]["isBan"]
         }
      }
      this.setState({restaurantOwner: updatingRestaurantOwner})
   }

   isBanButtonRender(isBan, id){
      if(isBan){
         return <Button variant="secondary" block onClick={() => this.toggleButton(id)}>Unban</Button>
      } else{
         return <Button variant="dark" block onClick={() => this.toggleButton(id)}>Ban</Button>
      }
   }

   deleteRestaurantOwner(id){
      let updatingrestaurantOwner = this.state.restaurantOwner;
      for (let i = 0; i < this.state.restaurantOwner.length; i++){
          if(updatingrestaurantOwner[i]["id"] === id){
              updatingrestaurantOwner.splice(i, 1);
          }
      }
      this.setState({users: updatingrestaurantOwner})
 }

    renderTableData() {
      return this.state.restaurantOwner.map((owner) => {
         const { id, name, address, email, isBan} = owner //destructuring

         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{address}</td>
               <td>{email}</td>
               <td>
                  {this.isBanButtonRender(isBan, id)}
               </td>
               <td>
                  <Button variant="danger" block onClick={()=>this.deleteRestaurantOwner(id)}>Delete</Button>
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
      if(this.state.restaurantOwner.length === 0){
         return(
            <Alert variant={'secondary'}>
               There are no Restaurant Owner in Restaurant Reviewer
            </Alert>
         )
      }
   }
  
   render() {
      return (
         <div id="post_table">
            <h1 id='title'>Restaurant Owner Table</h1>
            <Table striped bordered hover id='restaurantOwner' size='sm'>
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

export default RestaurantOwnerTable;