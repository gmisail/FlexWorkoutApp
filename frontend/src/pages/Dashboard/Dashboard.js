import React, { Component } from 'react';
import { Grid, Segment, Dropdown, Button, List, Feed, Label, Input, Form, SegmentInline } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import ProfileCard from './Profile/Card';
import Actions from "./Actions/index";
import WorkoutCard from '../Workout/WorkoutCard';
import ProfileOptions from "./Profile/Options";
import DynamicForm from '../../dynamic-form';

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

const cardioModel = [
    {
        type: "text",
        name: "Name",
        id: "name"
    },

    {
        type: "number",
        name: "Calories",
        id: "calories"
    },

    {
        type: "number",
        name: "Distance",
        id: "distance"
    },

    {
        type: "number",
        name: "Time",
        id: "time",
        units: "minutes"
    }
];

const distanceUnits = [
    { key: 'km', text: 'km', value: 'km' },
    { key: 'mi', text: 'mi', value: 'mi' }
]

class Dashboard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
                <div>
                    <Grid columns="3">
                        <Grid.Column width="4">
                            <ProfileCard user={this.props.user} />
                        </Grid.Column>
                        
                        <Grid.Column width="8">
                            <h3>My Workouts</h3>
                            {
                                this.props.user.workouts.map(workout => {
                                    var link = '/workout/' + this.props.user.username + '/' + workout;
                                    return (<WorkoutCard fluid author={this.props.user.username} link={link} workout={workout} />);
                                })
                            } 
                        </Grid.Column>

                        <Grid.Column width="4">
                            <h3>Body Entry</h3>
                            <Segment>
                               <DynamicForm model={cardioModel} /> 
                            </Segment>

                        </Grid.Column>
                    </Grid>
                </div>
        );
    }
}

export default connect(mapStateToProps, null)(Dashboard);

/* <Form>                           
                                    <Form.Field>
                                        <label>Name</label>
                                        <Input fluid type="text" placeholder="Name"/>
                                    </Form.Field>
                                    
                                    <Form.Field>
                                        <label>Calories</label>
                                        <Input fluid type="number" placeholder="Calories"/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Distance</label>
                                        <Input fluid label={<Dropdown defaultValue='mi' options={distanceUnits} />} labelPosition='right' type="number" placeholder="Distance"/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Time</label>
                                        <Input fluid label={{ basic: true, content: 'minutes' }} labelPosition='right' type="number" placeholder="Time"/>
                                    </Form.Field>

                                    <Form.Field>
                                        <Button fluid>Submit</Button>
                                    </Form.Field>
                                </Form>*/