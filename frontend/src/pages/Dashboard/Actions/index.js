import React, { Component } from 'react';
import { Grid, Card, Image, Button, List, Feed, Label, Icon, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Actions extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Grid>
                <Grid.Row columns="2">
                    <Grid.Column>
                        <Card fluid as={Link} to="/">
                            <Card.Content>
                                <Card.Header>Do Workout</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card fluid as={Link} to="/">
                    <Card.Content>
                        <Card.Header>View Workout</Card.Header>
                    </Card.Content>
                </Card>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns="2">
                    <Grid.Column>
                    <Card fluid as={Link} to="/">
                    <Card.Content>
                        <Card.Header>Create Workout</Card.Header>
                    </Card.Content>
                </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card fluid as={Link} to="/">
                    <Card.Content>
                        <Card.Header>View Workout Data</Card.Header>
                    </Card.Content>
                </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Actions;
