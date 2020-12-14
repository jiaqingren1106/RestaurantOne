import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Table.css';

import { getRestRequest, handleRequest } from "../../Action/restaurantAction";
import { getImage } from '../../Action/imageAction';

class DashboardTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         header: ["id", "Restaurant Name", "address", "certificate", "Accept", "Delete"],
         restaurants: [
            { _id: 1, name: "KFC", address: "Toronto", certificate:"" },
            { _id: 2, name: "A&W", address: "Alan", certificate:""  },
            { _id: 3, name: "Naan&Kabob", address: "Ren", certificate:""  },
            { _id: 4, name: "Chatime", address: "Place", certificate:""  },
         ],
         image: []
      }
      getRestRequest(this)
      

   }

   handleRestRequest(id, approve) {
      let updatingRestRequest = this.state.restaurants;
      let target;
      for (let i = 0; i < this.state.restaurants.length; i++) {
         if (updatingRestRequest[i]["_id"] === id) {
            target = updatingRestRequest[i]
            updatingRestRequest.splice(i, 1);
            break;
         }
      }
      handleRequest(approve, id, target);

      this.setState({ restaurants: updatingRestRequest })
   }

   renderTableData() {
      return this.state.restaurants.map((restaurant, index) => {
         const { _id, name, address,  certificate} = restaurant //destructuring
         
         return (
            <tr key={_id}>
               <td>{_id}</td>
               <td>{name}</td>
               <td>{address}</td>
               <td><img src={this.state.image[index]}/></td>
               <td>
                  <Button variant="success" block onClick={() => this.handleRestRequest(_id, true)}>Accept</Button>
               </td>
               <td>
                  <Button variant="danger" block onClick={() => this.handleRestRequest(_id, false)}>Decline</Button>
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

   emptyNotification() {
      if (this.state.restaurants.length === 0) {
         return (
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