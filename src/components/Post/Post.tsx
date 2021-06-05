import React from 'react';
import {MessageType} from "../../App";
import {useParams} from "react-router-dom";

export type PostPropsType = {
    posts: Array<MessageType>
}

function Post(props: PostPropsType) {

    const {postId} = useParams<{ postId?: string }>()
    const currentPost = props.posts.find(post => post.id === postId)
    return (
        <div className="App">

            Title: {currentPost?.title}
            Post: {currentPost?.message}
            Post created: {currentPost?.date.toLocaleString()}

        </div>
    );
}

export default Post;