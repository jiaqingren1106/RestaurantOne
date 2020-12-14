import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';
import { getUserInAdmin, deleteUser } from "../../Action/userAction";


class UserTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header: ["id", "name", "email", "Delete"],
         users: [
            { _id: 1, name: "Alan", email: "alan@gmail.com", type: "" },
            { _id: 2, name: "Alan", email: "alan@gmail.com", type: "" },
            { _id: 3, name: "Alan", email: "alan@gmail.com", type: "" },
            { _id: 4, name: "Alan", email: "alan@gmail.com", type: "" },
            { _id: 5, name: "Alan", email: "alan@gmail.com", type: "" },
         ]
      }
      getUserInAdmin(this);
   }

   
   deleteUser(id) {
      let updatingUsers = this.state.users;
      for (let i = 0; i < this.state.users.length; i++) {
         if (updatingUsers[i]["_id"] === id) {
            updatingUsers.splice(i, 1);
         }
      }
      deleteUser(id)
      this.setState({ users: updatingUsers })
   }

   renderTableData() {
      return this.state.users.map((user) => {
         if (user.type != "restaurant") {
            const { _id, name, email, type } = user //destructuring
            return (
               <tr key={_id}>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                     <Button variant="danger" block onClick={() => this.deleteUser(_id)}>Delete</Button>
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
               There are no users in Restaurant Reviewer
            </Alert>
         )
      }
   }



   render() {
      console.log(this.state.users);
      return (
         <div class="table">
            <h1 class='title'>User Table</h1>
            <Table striped bordered hover id='users' size='sm'>
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

export default UserTable;