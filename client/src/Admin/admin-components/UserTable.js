import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

class UserTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "name", "email", "status", "Ban/Unban", "Delete"],
         users : [
             {id: 1, name: "Alan", email:"alan@gmail.com", status:"BAN", isBan: true},
             {id: 2, name: "Alan", email:"alan@gmail.com", status:"BAN", isBan: true},
             {id: 3, name: "Alan", email:"alan@gmail.com", status:"BAN", isBan: true},
             {id: 4, name: "Alan", email:"alan@gmail.com", status:"BAN", isBan: true},
             {id: 5, name: "Alan", email:"alan@gmail.com", status:"BAN", isBan: true},
         ]
     }
   }

   toggleButton(id){
      let updatingUsers = this.state.users;
      for (let i = 0; i < this.state.users.length; i++){
         if(updatingUsers[i]["id"] === id){
            updatingUsers[i]["isBan"] = !updatingUsers[i]["isBan"]
            if(updatingUsers[i]["isBan"]){
                updatingUsers[i]["status"] = "BAN"
            } else{
                updatingUsers[i]["status"] = "UNBAN"
            }
            
            break
         }
      }
      this.setState({users: updatingUsers})
   }

   isBanButtonRender(isBan, id){
      if(isBan){
         return <Button variant="secondary" block onClick={() => this.toggleButton(id)}>Unban</Button>
      } else{
         return <Button variant="dark" block onClick={() => this.toggleButton(id)}>Ban</Button>
      }
   }
   
   deleteUser(id){
        let updatingUsers = this.state.users;
        for (let i = 0; i < this.state.users.length; i++){
            if(updatingUsers[i]["id"] === id){
                updatingUsers.splice(i, 1);
            }
        }
        this.setState({users: updatingUsers})
   }

    renderTableData() {
        return this.state.users.map((user) => {
            const { id, name, email, status , isBan} = user //destructuring
    
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{status}</td>
                    <td>
                        {this.isBanButtonRender(isBan, id)}
                    </td>
                    <td>
                        <Button variant="danger" block onClick={()=>this.deleteUser(id)}>Delete</Button>
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
       if(this.state.users.length === 0){
        return(
            <Alert variant={'secondary'}>
                There are no users in Restaurant Reviewer
            </Alert>
        )
       }
   }
  
   render() {
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