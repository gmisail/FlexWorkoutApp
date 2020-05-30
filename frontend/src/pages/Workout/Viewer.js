import React, { Component } from 'react';
import Preview from './Preview';
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';

class Viewer extends Component {

    constructor(props)
    {
        super(props);
    }

    render()
    {
        if(this.props.loaded && this.props.latest)
        {
            return this.props.latest.map((workout, id) => (
                <Preview name={workout.name} desc={workout.desc} author={workout.author} likes={workout.likes} key={id} />
            ));
        }

        return <p>Could not connect to server</p>
    }

}

export default Viewer;
