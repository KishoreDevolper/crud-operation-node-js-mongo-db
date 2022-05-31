const express = require("express"); 

const app = express();

const PORT = 5000;

const dotenv = require("dotenv");

dotenv.config();

app.use(express.json())

const routes = require("./routes/details.routes");

app.use("/api",routes)

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology:true,useNewUrlParser:true},()=>console.log("Database Connected Sucessfully"))

app.listen(PORT,()=>console.log("server looking on the port "+ PORT))