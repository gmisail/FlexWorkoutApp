import React, { Component } from 'react';
import {Button, Popup, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";


class Record extends Component {

    onRecord()
    {

    }

    render() {
        const link = "/record/" + this.props.username + "/" + this.props.name;
        return (
            <div>
                <h3>Record</h3>
                <Segment>
                    <Popup content='Record Workout Data' trigger={<Button circular icon="write" as={Link} to={link}></Button>}/>
                </Segment>
            </div>
        );
    }
}

export default Record;
