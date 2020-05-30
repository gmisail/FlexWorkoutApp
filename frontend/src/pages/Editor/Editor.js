import React, { Component } from 'react';
import axios from 'axios';

import ExerciseView from './Views/ExerciseView';
import SettingsView from './Views/SettingsView';
import { Grid } from 'semantic-ui-react';
import { Error } from "../Layout/Error";
import {connect} from "react-redux";
import {changeUserProperties, logout} from "../../actions";

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeUserProperties: userData => dispatch(changeUserProperties(userData))
    };
};

class WorkoutEditor extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            redirect: false,
            settings: {
                name: "",
                desc: ""
            },
            error: false,
            errorMessage: ""
        };
    }

    update(id, data)
    {
        this.setState({[id]: data});
    }

    create(settings)
    {
        const data = {
            'exercises': this.state.exercises,
            'settings': settings
        };

        if(!this.state.exercises || this.state.exercises.length <= 0)
        {
            this.setState({error: true});
        }
        else
        {
            axios.post('http://localhost:3000/workout/create', {'data': data, 'code': 100}).then((res) => {
                this.props.changeUserProperties(res.data.user);
                this.props.history.push("/workout/" + this.props.user.username + "/" + res.data.workoutName);
            });
        }
    }

    getErrors()
    {
        if(this.state.error)
        {
            return <Error header="Failed to post." content="You must add an exercise to your workout before you can post."/>
        }
        else
        {
            return <div></div>
        }
    }

    render()
    { 
        return (
            <div>
                <h2>Create</h2>

                <Grid stackable columns="2">
                    <Grid.Column>
                        <h3>Exercises</h3>
                        <ExerciseView onChange={this.update.bind(this)}/>
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Settings</h3>
                        <SettingsView onCreate={this.create.bind(this)}/>
                        {
                            this.getErrors()
                        }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEditor);
