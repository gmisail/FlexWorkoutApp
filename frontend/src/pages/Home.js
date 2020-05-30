import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Table, Label, Input } from 'semantic-ui-react';

import axios from 'axios';
import Viewer from "./Workout/Viewer";
import DynamicForm from '../dynamic-form';

class Home extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            latest: [],
            loaded: false
        };
    }

    componentDidMount()
    {
        axios.get('http://localhost:3000/workout/latest').then((res) => {
            this.setState({
                latest: res.data,
                loaded: true
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Segment>
                    <h1>Are you ready to Flex?</h1>
                    <p>
                        Flex is a collaborative platform for creating, sharing, and recording workouts.
                    </p>

                    <p>
                        Ready to start? <Link to='/register'>Create an account</Link> for free within seconds.
                    </p>
                </Segment>
                
                <h3>Latest</h3>

                <Grid stackable columns="4">
                    <Viewer loaded={this.state.loaded} latest={this.state.latest}/>
                </Grid>
            </div>
        );
    }
}

export default Home;