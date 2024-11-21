const express = require("express");
const dotenv =require('dotenv')
const connectToMOngoDb = require('./db')
const cors =require("cors");
connectToMOngoDb();
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8400;
app.listen(port,()=>{
    console.log("Server running on port "+ port)
})