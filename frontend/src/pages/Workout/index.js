import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";
import Workout from './Workout';
import Share from './Share';
import Record from './Record';

class WorkoutView extends Component {

    render() {
        return (
            <div>
                <h2>Workout</h2>

                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Workout name={this.props.match.params.name} username={this.props.match.params.username}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Record name={this.props.match.params.name} username={this.props.match.params.username}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Share/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default WorkoutView;
