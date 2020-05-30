import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';

class Strength extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                <Form>
                    <Grid columns="1">
                        <Grid.Column>
                            <Form.Field>
                                <label>Sets</label>
                                <input id={this.props.id} type="number" name="sets" placeholder="Sets..."/>
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                </Form>
            </div>
        );
    }
}

export default Strength;
