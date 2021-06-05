import React, {useState} from 'react';
import {Button, Input, Typography} from '@material-ui/core';
import {useForm} from "react-hook-form";
import {Redirect, NavLink} from 'react-router-dom'

type Inputs = {
    title: string,
    message: string,
};

export type CreatePostPropsType = {
    addPost: (title:string, message:string)=> void
}

function CreatePost(props:CreatePostPropsType) {
    const [isSubmited, setSubmit] = useState(false)
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit = (data: Inputs) => {
        props.addPost(data.title, data.message)
        setSubmit(true)
    }
    if (isSubmited) {
        return <Redirect to={'/'}/>
    }
    return (
        <div className="App">
            <Typography>
                Adding post page
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Title
                    <Input {...register("title")}/>
                </label>
                <label>
                    Post
                    <Input {...register("message")}/>
                </label>
                    <Input type={"submit"} value={"Submit"}/>
            </form>
            <NavLink to={'/blog'}>
                <Button>Back</Button>
            </NavLink>
        </div>
    );
}

export default CreatePost;