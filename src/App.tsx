import React, {useReducer} from 'react';
import Blog from "./components/Blog/Blog";
import {Switch, Route, Redirect} from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import Post from "./components/Post/Post";
import Component404 from "./components/404/Component404";
import {v1} from 'uuid';


const ADD_POST = "ADD_POST"


export type MessageType = {
    id: string
    title: string
    message: string
    date: Date
}

const initialState: Array<MessageType> = [
    {id:v1(), title:"First Post", message: "This is my first post", date: new Date()},
    {id:v1(), title:"Second Post", message: "This is my second post", date: new Date()},
    {id:v1(), title:"Third Post", message: "This is my third post", date: new Date()},
];

function reducer(state: Array<MessageType>, action: AddTaskActionType) {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id:v1(), title:action.title, message: action.message, date: new Date()}
            return [...state, newPost];
        default:
            return state;
    }
}
export type AddTaskActionType = {
    type: typeof ADD_POST
    title: string
    message: string
}
export const addTaskAC = (title: string, message: string): AddTaskActionType => {
    return {type: ADD_POST, title: title, message: message}
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const onAddMessage = (title: string, message: string) => {
        debugger
        dispatch(addTaskAC(title, message))
    }
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} render={() => <Redirect to={'/blog'}/>}/>
                <Route path={"/blog"} render={() => <Blog posts={state}/>}/>
                <Route path={"/create_post"} render={() => <CreatePost addPost={onAddMessage}/>}/>
                <Route path={"/post/:postId"} render={() => <Post posts={state}/>}/>
                <Route path={"/404"} render={() => <Component404/>}/>
                <Redirect from={'*'} to={"/404"}/>
            </Switch>
        </div>
    );
}

export default App;
