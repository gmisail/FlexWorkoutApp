import React, { Component } from 'react';
import { Menu, Label, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        user: state.user,
        authenticated: state.authenticated
    }
}

class ProfileOptions extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Menu fluid vertical>
                <Menu.Item name='inbox' href="//google.com">
                    History
                </Menu.Item>

                <Menu.Item href="//google.com" name='spam' >
                    <Label>51</Label>
                    Exercises
                </Menu.Item>

            </Menu>
        );
    }
}

export default connect(mapStateToProps, null)(ProfileOptions);
