import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';
import { getUserInAdmin } from "../../Action/userAction";
import {deleteUser} from "../../Action/userAction"
import {deleteRestaurant} from "../../Action/restaurantAction"


class RestaurantOwnerTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header: ["id", "Restaurant Name", "email", "Delete"],
         users: [
            { _id: 1, name: "KFC",  email: "kfc@gmail.com"},
            { _id: 2, name: "KFC", email: "kfc@gmail.com"},
            { _id: 3, name: "KFC",  email: "kfc@gmail.com"},
            { _id: 4, name: "KFC", email: "kfc@gmail.com"},
         ]
      }
      getUserInAdmin(this);
   }

   // toggleButton(id) {
   //    let updatingRestaurantOwner = this.state.users;
   //    for (let i = 0; i < this.state.users.length; i++) {
   //       if (updatingRestaurantOwner[i]["id"] === id) {
   //          updatingRestaurantOwner[i]["isBan"] = !updatingRestaurantOwner[i]["isBan"]
   //       }
   //    }
   //    this.setState({ users: updatingRestaurantOwner })
   // }

   // isBanButtonRender(isBan, id) {
   //    if (isBan) {
   //       return <Button variant="secondary" block onClick={() => this.toggleButton(id)}>Unban</Button>
   //    } else {
   //       return <Button variant="dark" block onClick={() => this.toggleButton(id)}>Ban</Button>
   //    }
   // }

   deleteRestaurantOwner(id, restaurant_id) {
      let updatingrestaurantOwner = this.state.users;
      for (let i = 0; i < this.state.users.length; i++) {
         if (updatingrestaurantOwner[i]["_id"] === id) {
            updatingrestaurantOwner.splice(i, 1);
         }
      }
      deleteUser(id);
      deleteRestaurant(restaurant_id);

      this.setState({ users: updatingrestaurantOwner })
   }

   renderTableData() {
      return this.state.users.map((owner) => {
         if (owner.type === "restaurant") {
            const { _id, name, email, restaurant_id} = owner //destructuring

            return (
               <tr key={_id}>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                     <Button variant="danger" block onClick={() => this.deleteRestaurantOwner(_id, restaurant_id)}>Delete</Button>
                  </td>
               </tr>
            )
         }

      })
   }

   renderTableHeader() {
      let header = this.state.header
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   emptyNotification() {
      if (this.state.users.length === 0) {
         return (
            <Alert variant={'secondary'}>
               There are no Restaurant Owner in Restaurant Reviewer
            </Alert>
         )
      }
   }

   render() {
      return (
         <div class="table">
            <h1 class='title'>Restaurant Owner Table</h1>
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