import {Card, Grid} from "semantic-ui-react";
import React from "react";

const ProfileCard = ({user}) => (
    <Card>
        <Card.Content>
            <Card.Header>{user.screenName}</Card.Header>
            <Card.Meta>@{user.username}</Card.Meta>
            <Card.Description>
                <p>
                    {user.bio}
                </p>
                <h4>Workouts</h4>
                {user.workouts.length}
            </Card.Description>
        </Card.Content>
    </Card>
);

export default ProfileCard;