import React, {useReducer} from 'react';
import './Blog.css';
import {Button, Typography} from '@material-ui/core';

export type MessageType = {
    id: string
    title: string
    message: string
}

const initialState: Array<MessageType> = [];

function reducer(state: Array<MessageType>, action: any) {
    switch (action.type) {
        case 'increment':
            return {...state};
        case 'decrement':
            return {...state};
        default:
            return {...state};
    }
}

function Blog() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onAddMessage = () => {
        alert('Hi')
    }
    return (
        <div>
            <div className={"header"}>
                <Typography variant="h3">
                    Blog
                </Typography>
            </div>
            <div className={"messages"}>

            </div>
            <div className={"button"}>
                <Button variant="contained" color="primary" onClick={onAddMessage}>Add Message</Button>
            </div>
        </div>
    );
}

export default Blog;
