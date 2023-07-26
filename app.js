const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
const userRoute = require('./src/routes/user.routes');
const productRoute = require('./src/routes/product.routes');
const contactRoute = require('./src/routes/contact.routes');
const bannerRoute = require('./src/routes/homeRoutes/banner.routes');
const veganRoute = require('./src/routes/homeRoutes/vegan.routes');
const madeRoute = require('./src/routes/madetoorder/madeHome.routes');
const detailsRoute = require('./src/routes/madetoorder/madeDetails.routes');
const insideRoute = require('./src/routes/inside.routes');
const appointmentRoute = require('./src/routes/madetoorder/madeAppointment.routes');
const paymentRoute = require('./src/routes/payment.routes');
app.use("/api/v1/", bannerRoute);
     app.use("/api/v1/", veganRoute);
     app.use("/api/v1/", madeRoute);
     app.use("/api/v1/", detailsRoute);
     app.use("/api/v1/", appointmentRoute);
     app.use("/api/v1/", insideRoute);
   app.use("/api/v1/", userRoute);
   app.use("/api/v1/", productRoute);
   app.use("/api/v1/", contactRoute);
   app.use("/api/v1/", paymentRoute);
module.exports = app; 