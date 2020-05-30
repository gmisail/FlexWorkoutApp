import React, { Component } from 'react';
import { Grid, Label, Table, Input, Button } from "semantic-ui-react";

import StrengthItem from "./Types/StrengthItem";
import WorkoutData from "../../services/WorkoutData";

class InputTable extends Component {

    constructor(props)
    {
        super(props);

        const data = this.props.data;
        const values = this.createDataValues(data);

        this.state = {
            data: data,
            values: values
        }

        this.onUpdate = this.onUpdate.bind(this);
        this.onSave = this.onSave.bind(this);

        this.renderWorkout = this.renderWorkout.bind(this);
    }

    createDataValues(res)
    {
        let values = {};
        for(var exercise = 0; exercise < res.exercises.length; exercise++)
        {
            const name = res.exercises[exercise].name;
            values[name] = [];

            for(var set = 0; set < res.exercises[exercise].sets; set++) 
            {
                values[name].push({
                    reps: 0,
                    weight: 0
                });
            }
        }

        return values;
    }

    onUpdate(data)
    {
        let updatedState = Object.assign({}, this.state);
        updatedState.values[data.name][data.set - 1] = {
            reps: data.reps,
            weight: data.weight
        };

        this.setState(updatedState);
    }

    onSave(event)
    {
        console.log(this.state.values);

       /* axios.post('http://localhost:3000/user/add-data', this.state.values).then(res => {
            console.log("Data posted.");
        }).catch(err => {
            console.log(err);
        });*/
    }

    renderWorkout()
    {
        return this.state.data.exercises.map((exercise, id) => {
            let sets = [];

            for(var set = 1; set <= exercise.sets; set++) 
                sets.push(<StrengthItem number={set} name={exercise.name} onUpdate={this.onUpdate} />);
            
            return sets;
        });
    }

    render() {
        return (
            <div>
                <Table celled fixed singleLine>
                    <Table.Body>
                        {
                            this.renderWorkout()
                        }
                    </Table.Body>
                </Table>

                <Button onClick={this.onSave} fluid>Save</Button>
            </div>
        );
    }
}

export default InputTable;
