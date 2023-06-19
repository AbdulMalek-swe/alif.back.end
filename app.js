const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
const userRoute = require('./src/routes/user.routes');
 
 
   app.use("/api/v1/", userRoute);

module.exports = app;