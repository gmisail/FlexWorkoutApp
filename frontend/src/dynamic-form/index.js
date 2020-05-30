import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Table, Label, Input, Form, Button } from 'semantic-ui-react';
import {Strength, Cardio, Other} from './types';

class DynamicForm extends Component {

    constructor(props)
    {
        super(props);

        const model = this.props.model;

        this.state = {
            model: model
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event)
    {
        let value = event.target.value;
        if(event.target.trim) value = value.trim();

        this.setState({
            [event.target.id]: value
        });
    }

    onSubmit(event)
    {
        this.props.onSubmit(this.state);
    }

    generate(element, id)
    {
        if(element.type == "text" || element.type == "password" || element.type == "number")
        {   
            if(element.options)
            {
                return <Form.Field>
                    <label>{element.name}</label>
                    <input trim={element.options.trim} id={element.id} name={element.name} type={element.type} onChange={this.onChange} />
                </Form.Field>
            }

            return <Form.Field>
                <label>{element.name}</label>
                <input id={element.id} name={element.name} type={element.type} onChange={this.onChange} />
            </Form.Field>
        }
    }

    render()
    {
        return (
            <Form>
                {this.state.model.map((element, id) => this.generate(element, id))}

                <Button fluid type='submit' onClick={this.onSubmit}>Submit</Button>    
            </Form>
        );
    }
}

export default DynamicForm;
