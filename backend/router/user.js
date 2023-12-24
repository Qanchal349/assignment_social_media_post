const express = require("express");
const { register, login, logout, getUser,updatePassword, updateProfile,updateProfileImage, forgotPassword, resetPassword } = require("../contollers/user");
const router = express.Router();
const {isAuthenticated} = require("../middleware/auth")


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile").get(isAuthenticated,getUser)
router.route("/updateprofileimage").put(isAuthenticated,updateProfileImage)
router.route("/update/password").put(isAuthenticated,updatePassword)
router.route("/update/profile").put(isAuthenticated,updateProfile)
router.route("/forgot/password").post(forgotPassword)
router.route("/reset/password/:token").put(resetPassword) 



module.exports = router
