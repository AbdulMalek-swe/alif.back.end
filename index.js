var colors = require('colors');
var env = require('dotenv').config();
 
const app = require('./app');
const { dbConnect } = require('./src/utils/dbConnect');
dbConnect()
 
app.listen(process.env.PORT, () => {
    console.log(`port running on ${process.env.PORT}`.red);
})
 