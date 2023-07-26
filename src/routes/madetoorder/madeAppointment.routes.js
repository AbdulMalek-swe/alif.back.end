const express = require("express");
const router = express.Router();
const appointmentController = require("../../controller/madeOrderController/madeAppointment.controller");
const upload = require("../../middleware/upload");
const { verifyToken } = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");
 
router
    .post("/made-appointment",verifyToken, authorization('admin'), upload.single("image"),  appointmentController.postAppointmentMade)
    .get("/made-appointment", appointmentController.getAppointmentMade)
    // .get("/vegan/:id", appointmentController.getVeganSingle)
    // .patch("/vegan/:id", verifyToken, authorization('admin'),appointmentController.updateVeganSingle)
    // .delete("/vegan/:id",  verifyToken, authorization('admin'),appointmentController.deleteVegan)
module.exports = router;