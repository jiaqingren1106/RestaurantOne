import React from 'react';
import './MenuItem.css';
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register, setRoute } from "../../redux/actions";
import {withRouter} from "react-router-dom";
import {updateRestMenu} from "../../Action/restaurantAction";


class MenuItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {menuid: props.menuid, restid: props.restid, upper: props.upper, data: props.state}
        console.log(props)
    }
    render() {
        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }
        const deleteMenu = () => {
            let changed = this.state.data.MenuItems;
            console.log(changed)
            let target = null;
            for (let i = 0; i < changed.length; i++) {
                if (changed[i].menuid === this.state.menuid) {
                    target = i;
                }
            }
            if (target != null) {
                changed.splice(target, 1);
                console.log(changed)
                this.state.upper(changed)
                updateRestMenu(this.state.menuid, this.state.restid, this)
            }
        }
        let show = "";
        if (this.props.display) {
            show = <i onClick={deleteMenu} className="fas fa-times absolute dark-red  ml2 mt2 delete-icon" />
        }

        return (
            <Card id="MenuItem1" className="MenuItemCard">
                <div className="imageButton" style={{ height: "200px" }}>
                    {show}
                    <Card.Img id="MenuItemPic" variant="top" src={this.props.image} />
                </div>

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



