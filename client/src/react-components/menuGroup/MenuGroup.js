import React from 'react';
import MenuItem from '../menuItem/MenuItem';
import './MenuGroup.css';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';




class MenuGroup extends React.Component {

  render() {
    const MenuItemcount = this.props.MenuItems.length;

    let cardgroups = [];
    var i;
    for (i = 0; i < MenuItemcount; i++) {
        cardgroups.push(i);
    }

    var MenuItemList;
    MenuItemList = (
      <CardGroup>
        {cardgroups.map((index) => {
          return <MenuItem
          image={(this.props.MenuItems)[index].image} 
          price={(this.props.MenuItems)[index].price} 
          name={(this.props.MenuItems)[index].name} 
          menuid={(this.props.MenuItems)[index].menuid}
          restid={this.props.restid}
          upper={this.props.upper}
          state={this.props.state}
          display={this.props.display}
          />
        })}
      </CardGroup>
    );
    

    return (
      <div className="MenuItemGroup">
        {MenuItemList}
      </div>
    );
  }
}

export default MenuGroup;