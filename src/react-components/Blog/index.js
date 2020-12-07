import React from 'react';
import "./styles.css"
import CardGroup from 'react-bootstrap/CardGroup'
import BlogElement from '../BlogElement'

class blog extends React.Component{

    render() {
        const blogCount = this.props.info.length;
        let cardgroups = []
        var i;
        for (i = 0; i < blogCount; i++){
            cardgroups.push(i)
        }
        var BlogList;

        BlogList = (
            <CardGroup>
                {cardgroups.map((index) => {
                    return <BlogElement
                        image={(this.props.info)[index].image}
                        title={(this.props.info)[index].title}
                        descriptions={(this.props.info)[index].descriptions}
                        date={(this.props.info)[index].date} />
                })}
            </CardGroup>
        );

        return(
            // <BrowserRouter>
            <div className={"Blog"}>
                {BlogList}
            </div>
            // </BrowserRouter>
        );
    }
}

export default blog