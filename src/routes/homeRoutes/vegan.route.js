const express = require("express");
const router = express.Router();
const veganController = require("../../controller/homeController/vegan.controller");
const upload = require("../../middleware/upload");
 
router
    .post("/vegan", upload.single("veganImage"), veganController.postVegan)
    .get("/vegan", veganController.getVegan)
module.exports = router;