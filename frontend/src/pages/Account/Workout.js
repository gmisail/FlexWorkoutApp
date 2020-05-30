import {Link} from "react-router-dom";
import {Segment, Button, List, Grid} from "semantic-ui-react";
import React from "react";

const Workout = ({link, workout}) => (<div>
    <Segment>
        <h4>
            <Link to={link}>{workout}</Link>
        </h4>

        
    </Segment>
    </div>
);

export default Workout;