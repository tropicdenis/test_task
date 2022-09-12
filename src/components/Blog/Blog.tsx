import React, { useState } from "react";
import "./Blog.css";
import { Button, Typography } from "@material-ui/core";
import { Redirect, NavLink } from "react-router-dom";
import { MessageType } from "../../App";

export type BlogPropsType = {
  posts: Array<MessageType>;
};

function Blog(props: BlogPropsType) {
  const [isRedirectToCreate, setRedirectToCreate] = useState(false);
  /* const [isShowPost, setShowPost] = useState (false);*/

  const onAddMessage = () => {
    setRedirectToCreate(true);
  };
  if (isRedirectToCreate) {
    return <Redirect to={"/create_post"} />;
  }

  /* const showPost = (id:string) => {
        setShowPost(true)
    }
    if (isShowPost) {
        return (<Redirect to={"/post/:id"}/>)
    }*/

  return (
    <div className={"main"}>
      <div className={"header"}>
        <Typography variant="h3">Test Test Test Blog</Typography>
      </div>
      <div className={"messages"}>
        {props.posts.map((post) => (
          <NavLink to={"/post/" + post.id}>
            <div className={"post"}>
              <div>{post.title}</div>
              <div>{post.message}</div>
              <div>{post.date.toLocaleString()}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className={"button"}>
        <Button variant="contained" color="primary" onClick={onAddMessage}>
          Add Message
        </Button>
      </div>
    </div>
  );
}

export default Blog;
