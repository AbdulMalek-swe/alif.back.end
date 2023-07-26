const express = require("express");
const insideController = require("../controller/insideController/inside.controller");
const { verifyToken } = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");
const upload = require("../middleware/upload");
const router = express.Router();
 
router
    .post("/inside",verifyToken, authorization('admin'), upload.array("image") ,  insideController.postInside)
    .get("/inside", insideController.getInside)
    .patch("/inside/:id",verifyToken, authorization('admin'),  insideController.updateInside)
    .delete("/inside/:id",verifyToken, authorization('admin'),  insideController.dltInside)
    
module.exports = router;