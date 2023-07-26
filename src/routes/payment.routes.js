const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment.controller");
 
router
    .post("/payment-method/get-payment-intent",paymentController.payment )
    .post("/payment-method/verify-payment/", paymentController.paymentConfirm)
     
    // .post("/user/login", userController.login)
    // .get("/user/profile", verifyToken, userController.getMe)
    // .get("/user/signup/confirmation/:token", userController.confirmationAccount)
module.exports = router;