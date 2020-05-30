import React, { Component } from 'react';
import { Segment, Form, Grid } from 'semantic-ui-react';

class Cardio extends Component  {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid columns="2">
                    <Grid.Column>
                            <Form.Field>
                                <label placeholder="Distance">Distance</label>
                                <input id={this.props.id} name="distance" placeholder="Distance..."  />
                            </Form.Field>
                    </Grid.Column>

                    <Grid.Column>
                            <Form.Field>
                                <label>Time</label>
                                <input id={this.props.id} type="number" name="time" placeholder="Time..." />
                            </Form.Field>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Cardio;
