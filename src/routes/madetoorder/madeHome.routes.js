const express = require("express");
const router = express.Router();
const madeController = require("../../controller/madeOrderController/madeHome.controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
 
router
    .post("/made-order",verifyToken, authorization('admin'), upload.single("madeImage"),  madeController.postMadeHome)
    .get("/made-order", madeController.getMadeHome)
    // .get("/vegan/:id", madeController.getVeganSingle)
    // .patch("/vegan/:id", verifyToken, authorization('admin'),madeController.updateVeganSingle)
    // .delete("/vegan/:id",  verifyToken, authorization('admin'),madeController.deleteVegan)
module.exports = router;