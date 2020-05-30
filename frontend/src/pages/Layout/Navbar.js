import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Responsive, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from "react-redux";

import { logout } from "../../actions";
import Authentication from "../../services/Authentication";

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: userData => dispatch(logout({}))
    }
};

class Navbar extends Component {

    onLogoutButtonClicked()
    {
        Authentication.logout((res) => {
            this.props.logout();
        });
    }

    getAccountNavigation()
    {
        if(this.props.authenticated)
        {
            const profileNavName = "@" + this.props.user.username;
            return (
                <Menu.Menu position="right">
                    <Dropdown item position="right" text={profileNavName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/account"><Icon name="edit"/>Edit Profile</Dropdown.Item>
                            <Dropdown.Item onClick={this.onLogoutButtonClicked.bind(this)}><Icon name="sign-out"/>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            );
        }
        else
        {
            return (
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to="/login">
                        <Icon name="sign in" /> Login
                    </Menu.Item>
                    <Menu.Item as={Link} to="/register">
                        <Icon name="user plus" /> Register
                    </Menu.Item>
                </Menu.Menu>
            );
        }
    }

    render() {
        return (
            <div>
                <Responsive>
                    <Menu inverted borderless fixed="top">
                        <Menu.Item header>
                            FLEX
                        </Menu.Item>

                        <Menu.Menu position="left">
                            <Menu.Item name="home" as={Link} to="/">
                                <Icon name="home" />
                                Home
                            </Menu.Item>
                            <Menu.Item name="chart bar" as={Link} to="/dashboard">
                                <Icon name="chart bar" />
                                Dashboard
                            </Menu.Item>
                            <Menu.Item as={Link} to="/create">
                                <Icon name="plus circle" />
                                Create
                            </Menu.Item>
                        </Menu.Menu>
                        
                        {this.getAccountNavigation()}
                    </Menu>
                </Responsive>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
