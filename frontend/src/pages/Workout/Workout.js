import React, { Component } from 'react';
import { Segment, List, Button, Icon, Grid, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InformationCard from './InformationCard';

import {connect} from "react-redux";
import {setActiveWorkout} from "../../actions";

import Share from './Share';
import Record from './Record';
import WorkoutData from "../../services/WorkoutData";

const mapDispatchToProps = dispatch => {
    return {
        setActiveWorkout: activeWorkoutData => dispatch(setActiveWorkout(activeWorkoutData))
    };
};

class Workout extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            error: false,
            data:
            {
                name: '',
                desc: '',
                exercises : []
            }
        };

        this.onSave = this.onSave.bind(this);
    }

    onSave()
    {
        console.log("Saving...");
    }

    componentDidMount()
    {
        const { username, name } = this.props;

        WorkoutData.get(name, username, (res) => {
            this.setState({data: res});
            this.props.setActiveWorkout(res);
        });
    }

    render()
    {
        return (
            <div>
                <InformationCard name={this.state.data.name} author={this.state.data.author} desc={this.state.data.desc} />
                <div>
                    <Segment>
                        <List divided relaxed>
                        {
                            this.state.data.exercises.map((exercise, id) => {
                                switch(exercise.exerciseType)
                                {
                                    case 'strength':
                                        return (<List.Item key={id}><b>{exercise.name}</b> ({exercise.sets} sets)</List.Item>);
                                    case 'cardio':
                                        return (<List.Item key={id}><b>{exercise.name}</b> ({exercise.distance} / {exercise.time} minutes)</List.Item>);
                                    case 'other':
                                        return (<List.Item key={id}><b>{exercise.name}</b> ({exercise.desc})</List.Item>);
                                    default:
                                        return (<List.Item key={id}><b>Cannot find exercise: {JSON.stringify(exercise)}</b></List.Item>);
                                }
                            })
                        }
                        </List>
                    </Segment>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Workout);
