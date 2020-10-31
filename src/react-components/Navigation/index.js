import React from 'react';
import "./styles.css"
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button";

class Navigation extends React.Component{

    handleClick = () =>{
        console.log("clicked")
    }

    render(){
        return(
            <div>
                <ButtonGroup vertical>
                    <Button>Button</Button>
                    <Button>Button</Button>

                    <Button>Button</Button>
                    <Button>Button</Button>


                </ButtonGroup>

            </div>
        )
    }
}

export default Navigation