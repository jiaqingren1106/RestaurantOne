import React from 'react';
import "./styles.css"
import CardGroup from 'react-bootstrap/CardGroup'
import BlogElement from '../BlogElement'

class blog extends React.Component{

    render() {
        const blogCount = this.props.title.length;
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
                        image={(this.props.image)[index]}
                        title={(this.props.title)[index]}
                        descriptions={(this.props.description)[index]}
                        date={(this.props.date)[index]}
                        ids={(this.props.post_id)[index]} />
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