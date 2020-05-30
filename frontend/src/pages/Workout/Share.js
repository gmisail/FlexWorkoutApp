import React, { Component } from 'react';
import {Button, Popup, Segment} from "semantic-ui-react";

class Share extends Component {

    render() {
        return (
            <div>
                <h3>Share</h3>
                <Segment>
                    <Popup content='Save' trigger={<Button circle icon="save"></Button>}/>
                    <Popup content='Copy Link' trigger={<Button circle icon="linkify"></Button>}/>
                    <Popup content='Download' trigger={<Button circle icon="code"></Button>}/>
                </Segment>
            </div>
        );
    }
}

export default Share;



