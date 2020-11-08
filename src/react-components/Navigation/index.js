import React from 'react';
import "./styles.css"

class Navigation extends React.Component {
    render() {
        return(
            <div className={"navigation"}>

                <button className={'navigationButton'}>
                    Back
                </button>

                <button className={"navigationButton"}>
                    Blog
                </button>

                <button className={"navigationButton"}>
                    Menu
                </button>

                <button className={"navigationButton"}>
                    Coupon
                </button>


            </div>
        )
    }
}



export default Navigation