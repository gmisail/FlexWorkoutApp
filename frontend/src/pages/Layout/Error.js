import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export const Error = ({header, content}) => (
    <Message>
        <Message.Header>{header}</Message.Header>
        <p>
            {content}
        </p>
    </Message>
);
