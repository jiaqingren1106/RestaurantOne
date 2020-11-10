import React from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card'
import burgers from '../../images/burger.jpg'
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class BlogElement extends React.Component{
    render(){
        const maxlength = 300;
        let description = this.props.descriptions.slice(1, maxlength)
        description = description.concat("......")
        const setRoute = this.props.setRoute

        return(
            <Card className={"Card"}>
                <Card.Img className={"CardImage"} variant={"top"} src={burgers} />
                <Card.Body>
                    <Card.Text className={"Title"}>
                        {this.props.title}
                    </Card.Text>

                    <Card.Text className={"Date"}>
                        {this.props.date}
                    </Card.Text>

                    <Card.Text className={"Description"}>
                        {description}
                    </Card.Text>

                    <Link onClick={() => setRoute("Post")}>
                        <Card.Text className={'readMore'}>
                            read more ....
                        </Card.Text>
                    </Link>

                </Card.Body>
            </Card>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogElement);
