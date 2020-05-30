import React, { Component } from 'react';
import { Grid, Label, Table, Input } from "semantic-ui-react";

class StrengthItem extends Component {

    constructor(props)
    {
        super(props);

        const {number, name} = this.props;
        this.state = {
            set: number,
            name: name,
            reps: 0,
            weight: 0
        };

        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    validate(value)
    {
        return Math.max(0, value);
    }

    onUpdate()
    {
        this.props.onUpdate(this.state);
    }

    onChange(event)
    {
        const value = this.validate(event.target.value);
        this.setState({
            [event.target.name]: value
        }, this.onUpdate);
    }

    render() 
    {
        return (
            <Table.Row>
                <Table.Cell>
                    <Label>Set {this.props.number}</Label> {this.props.name}
                </Table.Cell>
                <Table.Cell><Input fluid name="reps" type="number" placeholder="Reps" value={this.state.reps} onChange={this.onChange} /></Table.Cell>
                <Table.Cell><Input fluid name="weight" type="number" placeholder="Weight" value={this.state.weight} onChange={this.onChange} /></Table.Cell>
            </Table.Row>
        );
    }
}

export default StrengthItem;
