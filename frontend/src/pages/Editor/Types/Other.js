import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class Other extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (                
            <Form>
                <Form.Field>
                    <label>Description</label>
                    <input id={this.props.id} name="desc" rows="3" value={this.props.desc} placeholder="Description..." onChange={this.props.onChange}/>
                </Form.Field>
            </Form>
        );
    }
}

export default Other;
