/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profie.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileAction,
  logoutAction,
  updatePassword,
  updateProfileRequest,
} from "../redux/actions/user";
import { getAllPostLoggedIn } from "../redux/actions/post";
import PostItem from "../posts/PostItem";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [updatePasswordOpen, setUpdatePasswordOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfileAction());
    dispatch(getAllPostLoggedIn());

    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch]);

  const logoutHandler = async (e) => {
    e.preventDefault();
    await dispatch(logoutAction());
    navigate("/login");
  };

  const allPostRequest = (id) => {
    navigate("/posts");
  };

  const updateProfiledialogToggle = () => {
    setOpen(!open);
  };
  const updatePasswordialogToggle = () => {
    setUpdatePasswordOpen(!updatePasswordOpen);
  };

  const updateProfileHandler = async () => {
    await dispatch(updateProfileRequest(name, email));
    updateProfiledialogToggle();
    dispatch(getProfileAction());
  };

  const updatePasswordHandler = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    updatePasswordialogToggle();
  };

  return (
    <>
      {user && (
        <div className="profileDetailsSection">
          <p>
            Name <span>{user.name}</span>
          </p>
          <p>
            Email <span>{user.email}</span>
          </p>
          <div className="profileAction">
            <Link to="/posts" className="profileLink" onClick={logoutHandler}>
              Logout
            </Link>
            <Link
              to="#"
              className="profileLink"
              onClick={updatePasswordialogToggle}
            >
              ChangePassword
            </Link>
            <Link
              to="#"
              className="profileLink"
              onClick={updateProfiledialogToggle}
            >
              Update Profile
            </Link>
          </div>
        </div>
      )}

      {posts && (
        <div className="allOwnPosts">
          <h1 style={{ textAlign: "center" }}>All Posts</h1>
          {posts.map((post, i) => (
            <PostItem
              id={post._id}
              post={post}
              key={i}
              allPostRequest={allPostRequest}
            />
          ))}
        </div>
      )}

      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={updateProfiledialogToggle}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          {" "}
          Update Profile
        </DialogTitle>
        <DialogContent className="submitDialog">
          <div className="profileForm">
            <input
              type="text"
              placeholder={user && user.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder={user && user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={updateProfiledialogToggle}>Cancel</Button>
          <Button color="primary" onClick={updateProfileHandler}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        aria-labelledby="simple-dialog-title"
        open={updatePasswordOpen}
        onClose={updatePasswordialogToggle}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          Update Password
        </DialogTitle>
        <DialogContent className="submitDialog">
          <div className="profileForm">
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={updatePasswordialogToggle}>Cancel</Button>
          <Button color="primary" onClick={updatePasswordHandler}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
