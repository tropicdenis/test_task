import React from 'react';
import {MessageType} from "../../App";
import {NavLink, useParams} from "react-router-dom";
import {Button, Typography} from "@material-ui/core";

export type PostPropsType = {
    posts: Array<MessageType>
}

function Post(props: PostPropsType) {

    const {postId} = useParams<{ postId?: string }>()
    const currentPost = props.posts.find(post => post.id === postId)
    return (
        <div className="main">
            <Typography variant={"h3"}>
               Post page
            </Typography>
            <div>
                <div>
                    Title: {currentPost?.title}
                </div>
                <div>
                    Post: {currentPost?.message}
                </div>
                <div>
                    Post created: {currentPost?.date.toLocaleString()}
                </div>
                <NavLink to={'/blog'}>
                    <Button variant="contained" color="primary">Back</Button>
                </NavLink>
            </div>

        </div>
    );
}

export default Post;