const express = require("express");
const router = express.Router();
const bannerController = require("../../controller/homeController/banner.controller");
const upload = require("../../middleware/upload");
 
router
    .post("/banner", upload.single("bannerImage"), bannerController.postBanner)
    .get("/banner", bannerController.getBanner)
module.exports = router;