import React from 'react';
import { Card } from 'semantic-ui-react';

const InformationCard = ({name, author, desc}) => (
    <Card fluid>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{author}</Card.Meta>
            <Card.Description>{desc}</Card.Description>
        </Card.Content>
    </Card>
);

export default InformationCard;