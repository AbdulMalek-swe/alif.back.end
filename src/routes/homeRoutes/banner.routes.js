const express = require("express");
const router = express.Router();
const bannerController = require("../../controller/homeController/banner.controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
router
    .post("/banner", verifyToken, authorization('admin'), upload.single("bannerImage"), bannerController.postBanner)
    .get("/banner", bannerController.getBanner)
    .get("/banner/:id",verifyToken, bannerController.getBannerById)
    .patch("/banner/:id",verifyToken, authorization('admin'), bannerController.updateBannerSingle)
    .delete("/banner/:id", verifyToken, authorization('admin'),   bannerController.deleteBanner)
module.exports = router;