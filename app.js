const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
const userRoute = require('./src/routes/user.routes');
const productRoute = require('./src/routes/product.routes');
const bannerRoute = require('./src/routes/homeRoutes/banner.route');
const veganRoute = require('./src/routes/homeRoutes/vegan.route');
app.use("/api/v1/", bannerRoute);
     app.use("/api/v1/", veganRoute);
   app.use("/api/v1/", userRoute);
   app.use("/api/v1/", productRoute);
module.exports = app; 