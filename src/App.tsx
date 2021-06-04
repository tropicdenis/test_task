import React, {useReducer} from 'react';
import Blog from "./components/Blog/Blog";
import {Switch, Route, Redirect} from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import Post from "./components/Post/Post";
import Component404 from "./components/404/Component404";

export enum BLOG_ACTIONS_TYPE {
    ADD_POST = "ADD_POST"
}

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

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onAddMessage = () => {
        alert('Hi')
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} render={() => <Blog />}/>
                <Route path={"/create_post"} render={() => <CreatePost/>}/>
                <Route path={"/post"} render={() => <Post/>}/>
                <Route path={"/404"} render={() => <Component404/>}/>
                <Redirect from={'*'} to={"/404"}/>
            // path='/' blog
            // path='/edit' Editblog
            // path='/post/:postid' Post
            </Switch>
        </div>
    );
}

export default App;
