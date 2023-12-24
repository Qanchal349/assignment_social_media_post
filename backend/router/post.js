
const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../middleware/auth");
const { createNewPost, allPosts, getOwnPosts,getSigleUserAllPost, createComment, getPostById } = require("../contollers/post");


router.route("/post").post(isAuthenticated,createNewPost)
router.route("/post").get(allPosts);
router.route("/post/me").get(isAuthenticated,getOwnPosts);
router.route("/post/user/:id").get(getSigleUserAllPost)  // with user id
router.route("/post/:id").put(isAuthenticated,createComment)
router.route("/post/:id").get(getPostById)

module.exports = router
