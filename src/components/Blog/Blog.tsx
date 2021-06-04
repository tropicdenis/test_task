import React, {useState} from 'react';
import './Blog.css';
import {Button, Typography} from '@material-ui/core';
import {Redirect} from "react-router-dom";


function Blog() {
    const [isRedirectToCreate, setRedirectToCreate] = useState(false);
    const onAddMessage = ()=> {
        setRedirectToCreate(true);
    }
    if (isRedirectToCreate) {
        return (<Redirect to={"/create_post"}/>)
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
