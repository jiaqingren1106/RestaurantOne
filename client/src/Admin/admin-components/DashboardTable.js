import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

class DashboardTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header : ["id", "Restaurant Name", "email", "address", "Accept", "Delete"],
         restRequest : [
             {id: 1, name: "KFC", email:"KFC@gmail.com", address: "Toronto"},
             {id: 2, name: "A&W", email:"A&W@gmail.com", address: "Alan"},
             {id: 3, name: "Naan&Kabob", email:"Naan&Kabob@gmail.com", address: "Ren"},
             {id: 4, name: "Chatime", email:"Chatime@gmail.com", address: "Place"},
         ]
     }
   }

   deleteRestRequest(id){
      let updatingRestRequest = this.state.restRequest;
      for (let i = 0; i < this.state.restRequest.length; i++){
          if(updatingRestRequest[i]["id"] === id){
              updatingRestRequest.splice(i, 1);
              break;
          }
      }
      this.setState({restRequest: updatingRestRequest})
 }

    renderTableData() {
      return this.state.restRequest.map((restaurant) => {
         const {id, name, email, address} = restaurant //destructuring

         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{email}</td>
               <td>{address}</td>
               <td>
                    <Button variant="success" block onClick={()=>this.deleteRestRequest(id)}>Accept</Button>
               </td>
               <td>
                  <Button variant="danger" block onClick={()=>this.deleteRestRequest(id)}>Decline</Button>
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
      if(this.state.restRequest.length === 0){
         return(
            <Alert variant={'secondary'}>
               There are no Restaurant Registration Request in Restaurant Reviewer
            </Alert>
         )
      }
   }
  
   render() {
      return (
        <div class="table">
            <h1 class='title'>Dashboard</h1>
            <h3 class='subtitle'>Restaurant Registration Request</h3>
            <Table striped bordered hover id='RestRequest' size='sm'>
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

export default DashboardTable;