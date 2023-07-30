const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const upload = require("../middleware/upload");
const authorization = require("../middleware/authorization");
const { verifyToken } = require("../middleware/verifyToken");
 
router
    .post("/product/all",verifyToken, authorization('admin'), upload.array("productImage") ,productController.postProduct)
    .get("/product/all", productController.getProduct)
    .patch("/product/like-update/:id",verifyToken, authorization('admin'), productController.likeUpdateProduct)
    .get("/product/:id", productController.getOneProduct)
    .delete("/product/all/delete",verifyToken, authorization('admin'), productController.deleteBulkProduct)
    .patch("/product/one/:id",verifyToken, authorization('admin'), productController.updateProduct)
    .delete("/product/delete/:id",verifyToken, authorization('admin'), productController.deleteProduct)
  
     
module.exports = router; 