import React from 'react';
import './MenuItem.css';
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register, setRoute } from "../../redux/actions";

import {withRouter} from "react-router-dom";



class MenuItem extends React.Component {
    render() {
        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        return (
            <Card id="MenuItem1" className="MenuItemCard">
                <Card.Img id="MenuItemPic" variant="top" src={this.props.image} />

                <Card.Body id="cardBody">
                    <Card.Title id="MenuItemTitle">{this.props.name}</Card.Title>
                    <Card.Text className={'MenuPrice'}>
                        {this.props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default (MenuItem);



