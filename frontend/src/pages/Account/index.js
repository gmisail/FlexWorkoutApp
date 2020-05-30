import React, { Component } from 'react';
import Authentication from '../../services/Authentication';
import { Grid, Button, Segment, Form, Input, List, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout, changeUserProperties } from '../../actions';
import Workout from './Workout';
import axios from "axios";

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: userData => dispatch(logout({})),
        changeUserProperties: userData => dispatch(changeUserProperties(userData))
    };
};

class Account extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            screenName: this.props.user.screenName,
            bio: this.props.user.bio,

            animation: {
                saving: false
            }
        };

        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onLogoutClick()
    {
        Authentication.logout((res) => {
            this.props.logout();
        });
    }

    onSaveClick()
    {
        axios.post('http://localhost:3000/user/update', this.state).then(res => {
            this.props.changeUserProperties(res.data.user);
            this.setState({animation: {saving: false}});
        }).catch(err => {
            console.log(err);
        });
    }

    onChange(event)
    {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Me</h2>

                <Grid stackable columns="1">
                    <Grid.Column>
                        <h3>Information</h3>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <label>Display Name</label>
                                    <Input name="screenName" value={this.state.screenName} placeholder={this.props.user.screenName} onChange={this.onChange}/>
                                </Form.Field>

                                <Form.Field>
                                    <label>Username</label>
                                    <Input disabled placeholder={this.props.user.username} />
                                </Form.Field>

                                <Form.Field>
                                    <label>Bio</label>
                                    <Input name="bio" value={this.state.bio} placeholder={this.props.user.bio} onChange={this.onChange}/>
                                </Form.Field>

                                <Form.Field>
                                    <Button onClick={this.onSaveClick} loading={this.state.animation.saving}>Save</Button>
                                </Form.Field>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
