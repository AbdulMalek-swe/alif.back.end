const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
 
router
    .post("/user/register", userController.signup)
    .post("/user/login", userController.login)
    .get("/user/profile", verifyToken, userController.getMe)
    .patch("/user/subscribe", verifyToken, userController.userSubscribe)
    .get("/user/signup/confirmation/:token", userController.confirmationAccount)
    
    // 
    
  
    
module.exports = router;