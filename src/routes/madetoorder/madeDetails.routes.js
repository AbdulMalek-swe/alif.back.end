const express = require("express");
const router = express.Router();
const detailsController = require("../../controller/madeOrderController/madeDetails.controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
 
router
    .post("/made-details",verifyToken, authorization('admin'), upload.single("image"),  detailsController.postDetailsMade)
    .get("/made-details", detailsController.getDetailsMade)
    // .get("/vegan/:id", detailsController.getVeganSingle)
    // .patch("/vegan/:id", verifyToken, authorization('admin'),detailsController.updateVeganSingle)
    // .delete("/vegan/:id",  verifyToken, authorization('admin'),detailsController.deleteVegan)
module.exports = router;