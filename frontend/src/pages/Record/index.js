import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";

import InputTable from "./InputTable";

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        activeWorkout: state.activeWorkout
    }
}

class Record extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Record</h2>

                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <InputTable data={this.props.activeWorkout} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(Record);
