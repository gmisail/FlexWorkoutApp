import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Segment, Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import Authentication from "../services/Authentication";

class Register extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect: false,
            redirectPath: '/',
            registering: false
        };
    }

    onClick(event)
    {
        event.preventDefault();

        this.setState({registering: true});

        Authentication.register(this.state.username, this.state.password, (res) => {
            this.setState({
                registering: false,
                redirect: true,
                redirectPath: '/login'
            });
        });
    }

    onChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        if(this.state.redirect)
        {
            return <Redirect to={this.state.redirectPath} />
        }

        return (
            <div>
                <h2>Register</h2>

                <Segment>
                        <Form>
                            <Form.Field>
                                <label htmlFor="loginUsername">Username</label>
                                <input type="text" name="username" id="loginUsername" onChange={this.onChange.bind(this)} />
                            </Form.Field>

                            <Form.Field>
                                <label htmlFor="loginUsername">Password</label>
                                <input type="password" name="password" id="loginPassword" onChange={this.onChange.bind(this)} />
                            </Form.Field>
            
                            <Button fluid loading={this.state.registering} type="Submit" onClick={this.onClick.bind(this)}>Register</Button>
                        </Form>
                </Segment>
            </div>
        );
    }
}

export default Register;
