const express = require("express");
const router = express.Router();
const veganController = require("../../controller/homeController/vegan.controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
 
router
    .post("/vegan",verifyToken, authorization('admin'), upload.single("veganImage"),  veganController.postVegan)
    .get("/vegan", veganController.getVegan)
    .get("/vegan/:id", veganController.getVeganSingle)
    .patch("/vegan/:id", verifyToken, authorization('admin'),veganController.updateVeganSingle)
    .delete("/vegan/:id",  verifyToken, authorization('admin'),veganController.deleteVegan)
module.exports = router;