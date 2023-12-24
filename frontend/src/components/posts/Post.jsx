/** @format */

import React, { useEffect, useState } from "react";
import AddCircle from "@material-ui/icons/AddCircle";
import PostItem from "./PostItem";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import "./post.css";
import { useDispatch, useSelector } from "react-redux";
import { allPostUser, createNewPost, postAction } from "../redux/actions/post";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Post = () => {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, error, message } = useSelector((state) => state.posts);
  const { isAuthenticated } = useSelector((state) => state.user);

  const dialogToggle = () => {
    setOpen(!open);
  };

  const SubmitHandler = async () => {
    if (!isAuthenticated) navigate("/login");
    await dispatch(createNewPost(post));
    setOpen(!open);
    dispatch(postAction());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(postAction());
  }, [dispatch,error,message]);

  const allPostRequest = (owner) => {
    dispatch(allPostUser(owner._id));
  };

  return (
    <>
      <div className="allPostContainer">
        <p onClick={dialogToggle}>
          {" "}
          <AddCircle /> Create New Post
        </p>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <PostItem
              key={post._id}
              id={post._id}
              post={post}
              allPostRequest={allPostRequest}
            />
          ))}
        {posts && posts.length === 0 && <h1>No Post Found</h1>}
      </div>

      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={dialogToggle}
      >
        <DialogTitle>Submit Post</DialogTitle>
        <DialogContent className="submitDialog">
          <textarea
            cols="60"
            rows="5"
            name="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogToggle}>Cancel</Button>
          <Button color="primary" onClick={SubmitHandler}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
