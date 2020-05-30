import React, {Component} from 'react';
import {Form, Button, Segment, TextArea} from 'semantic-ui-react';
import DynamicForm from '../../../dynamic-form';

const model = [
    {
        type: "text",
        id: "name",
        name: "Name",
        options: {
            trim: true
        }
    }, 
    {
        type: "text",
        id: "desc",
        name: "Description",
        options: {
            trim: false
        }
    }
];

class SettingsView extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.onCreate(data);
    }

    render() {
        return (
            <Segment>
                <DynamicForm model={model} onSubmit={this.onSubmit} />
            </Segment>
        );
    }
}

export default SettingsView;
