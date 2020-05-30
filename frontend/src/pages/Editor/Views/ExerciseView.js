import React, {Component} from 'react';
import Strength from '../Types/Strength';
import Cardio from '../Types/Cardio';
import Other from '../Types/Other';
import {Button, Segment, Input, Form, Divider, Grid} from 'semantic-ui-react';

const AddExerciseButton = ({...params}) => (
    <Grid.Column>
        <Button name={params.name} fluid onClick={params.onClick}>{params.type}</Button>
    </Grid.Column>
);

const RemoveExerciseButton = ({...params}) => (<Button onClick={params.onClick}>Remove</Button>);

class ExerciseView extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            exercises: []
        };

        this.addExercise = this.addExercise.bind(this);
        this.setExerciseData = this.setExerciseData.bind(this);
        this.getExerciseType = this.getExerciseType.bind(this);
        this.removeExercise = this.removeExercise.bind(this);
    }

    addExercise(event) 
    {
        const id = this.state.exercises.length;
        const exercises = this.state.exercises.concat({
            name: '',
            desc: '',
            exerciseType: event.target.name,
            sets: 0,
            reps: 0,
            distance: "",
            time: 0,
            visible: true,
            id: id
        });

        this.setState({exercises});
    }

    setExerciseData(event) 
    {
        let exercises = [...this.state.exercises];
        exercises[event.target.id][event.target.name] = event.target.value;
        this.setState({exercises});

        this.props.onChange("exercises", this.state.exercises);
    }

    removeExercise(event) 
    {
        let exercises = [...this.state.exercises];
        this.setState({
            exercises: exercises.filter((exercise, id) => id != event.target.id)
        });
    }

    getExercises() 
    {
        if (this.state.exercises.length > 0) 
        {
            return this.state.exercises.map((exercise, id) => (
                <Segment key={id}>
                    <Form>
                        <Form.Field>
                            <label placeholder="Name">Name</label>
                            <input id={id} name="name" placeholder="Name..." value={exercise.name}
                                   onChange={this.setExerciseData}/>
                        </Form.Field>

                        <Form.Field>
                            {this.getExerciseType(exercise.exerciseType, exercise.sets, exercise.reps, exercise.desc, id)}
                        </Form.Field>

                        <Button id={id} fluid icon='trash' onClick={this.removeExercise}></Button>
                    </Form>
                </Segment>
            ));
        } 
        else 
        {
            return <Segment>
                <p>It seems that you haven't built your workout yet! Start by adding exercises using the buttons below.</p>
            </Segment>
        }
    }

    getExerciseType(type, sets, reps, desc, id) 
    {
        switch (type)
        {
            case 'strength':
                return <Strength id={id} sets={sets} reps={reps} onChange={this.setExerciseData} onClick={this.removeExercise}/>
            case 'cardio':
                return <Cardio id={id} sets={sets} reps={reps} onChange={this.setExerciseData} onClick={this.removeExercise}/>
            case 'other':
                return <Other id={id} desc={desc} onChange={this.setExerciseData} onClick={this.removeExercise}/>
        }
    }

    render() 
    {
        return (
            <div>
                <div id="exercises"> {this.getExercises()} </div>

                <Segment>
                    <Grid columns={3}>
                        <AddExerciseButton name="strength" type="Strength" onClick={this.addExercise}/>
                        <AddExerciseButton name="cardio" type="Cardio" onClick={this.addExercise}/>
                        <AddExerciseButton name="Other" type="Other" onClick={this.addExercise}/>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default ExerciseView;