import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Segment, Form, Button } from 'semantic-ui-react';

import axios from 'axios';

import Authentication from '../services/Authentication';
import {connect} from "react-redux";
import {login} from "../actions";
import DynamicForm from '../dynamic-form';

const mapDispatchToProps = dispatch => {
    return {
        login: userData => dispatch(login(userData, true))
    };
};

const model = [
    {
        type: "text",
        id: "username",
        name: "Username"
    },

    {
        type: "password",
        id: "password",
        name: "Password"
    }
];

class Login extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isLoggingIn: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data)
    {
        this.setState({
            isLoggingIn: true
        });

        axios.post('http://localhost:3000/user/login', {username: data.username, password: data.password}).then(res => {
            this.props.login(res.data.user);
            this.setState({
                loggingIn: false
            });

            this.props.history.push(this.props.location.state.from);
        }).catch(err => {
            console.log(err);
            
            this.setState({
                isLoggingIn: false
            });
        });
    }

    render()
    {
        return (
            <div>
                <h2>Login</h2>

                <Segment>
                    <DynamicForm model={model} onSubmit={this.onSubmit}/>
                </Segment>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Login);
