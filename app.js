const express = require("express");
const userRoutes = require("./routes/userRoutes");
const Sequelize = require("sequelize");
const bodyparser = require("body-parser");
const router = express.Router();
router.use(bodyparser.json());

const app = express();
app.use("/",userRoutes);

// database connection 
const db = require("./models");
db.sequelize.sync().then(()=>{
    console.log("db synced");
}).catch((error)=>{
    console.log("not synced");
})
// set port, listen for requests
const port = 8081;
app.listen(port,function () {
    console.log("Application is running");
})
