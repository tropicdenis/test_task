import React, {useState} from 'react';
import {Button,Typography} from '@material-ui/core';
import {useForm} from "react-hook-form";
import {Redirect, NavLink} from 'react-router-dom'

type Inputs = {
    title: string,
    message: string,
};

export type CreatePostPropsType = {
    addPost: (title: string, message: string) => void
}

function CreatePost(props: CreatePostPropsType) {
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
        <div className="main">
            <Typography variant={"h3"}>
                Add post page
            </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>
                            Title
                            <input {...register("title")}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Post
                            <input {...register("message")}/>
                        </label>
                    </div>
                    <div>
                        <input type={"submit"} value={"Add post"}/>
                    </div>
                </form>
            <NavLink to={'/blog'}>
                <Button  variant="contained" color="primary">Back</Button>
            </NavLink>
        </div>
    );
}

export default CreatePost;