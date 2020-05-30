import React, { Component } from 'react';
import { Grid, Segment, Image, Card, Button, List, Feed, Label, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class WorkoutCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Card fluid={this.props.fluid} as={Link} to={this.props.link}>
                <Card.Content>
                    <Card.Header>{this.props.workout}</Card.Header>
                    <Card.Meta>{this.props.author}</Card.Meta>
                    
                </Card.Content>
            </Card>
        );
    }
}

export default WorkoutCard;
