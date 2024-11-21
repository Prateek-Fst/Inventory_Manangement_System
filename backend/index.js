const express = require("express");
const connectToMOngoDb = require('./db')
const cors =require("cors");
connectToMOngoDb();
const app = express();
app.use(cors());
app.use(express.json());
const port =8400;
app.listen(port,()=>{
    console.log("Server running on port "+ port)
})