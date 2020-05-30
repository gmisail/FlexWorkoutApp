import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Container, Grid, Segment, Button, Card} from 'semantic-ui-react';

class Preview extends Component {

    constructor(props)
    {
        super(props);
    }

    render()
    {
        let desc = this.props.desc;
        const link = `/workout/${this.props.author}/${this.props.name}`;
        if(desc.length > 100) desc = desc.slice(0, 100) + "...";

        return (
            <Grid.Column>
                <Card fluid as={Link} to={link}>
                    <Card.Content>
                        <Card.Header>{this.props.name} </Card.Header>
                        <Card.Meta>{this.props.author}</Card.Meta>
                        <Card.Description>
                            <p>{this.props.likes}</p>
                            {desc}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}

export default Preview;
