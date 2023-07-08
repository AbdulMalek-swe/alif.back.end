const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const upload = require("../middleware/upload");
 
router
    .post("/product/all", upload.single("productImage") ,productController.postProduct)
    .get("/product/all", productController.getProduct)
    .patch("/product/like-update/:id", productController.likeUpdateProduct)
    .get("/product/:id", productController.getOneProduct)
    // .post("/user/login", userController.login)
    // .get("/user/profile", verifyToken, userController.getMe)
    // .get("/user/signup/confirmation/:token", userController.confirmationAccount)
module.exports = router;