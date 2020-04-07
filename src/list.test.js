import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Person from './parts.js';
import List from './List';

describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <List
                id="7"
                name="Taylor"
                avatar="something"
                status="true"
                />,
                div
        )

        ReactDOM.unmountComponentAtNode(div);
    })
})
