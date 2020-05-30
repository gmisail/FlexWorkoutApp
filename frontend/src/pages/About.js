import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Grid, Table, Label, Input } from 'semantic-ui-react';

class About extends Component {

    render() {
        return (
            <div>
                <h2>About</h2>
                <Segment>
                    <h3>How was it created?</h3>
                    <p>
                        Flex was initially developed by Graham Misail at the 2019 Blueprint Hackathon using 
                        Bootstrap, Pug / Jade, Node.js, and Express. The codebase was completely scrapped in the coming
                        months, with the entire project being rewritten in React with a Node.js / Express / MongoDB backend. 
                    </p>
                </Segment>
            </div>
        );
    }
}

export default About;