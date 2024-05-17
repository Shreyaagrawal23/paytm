const express = require("express");
const cors =require("cors")
const app = express();
const mainRouter=require("./routes/index")

app.use("/api/v1", mainRouter)
app.use(express.json())  //bodyparser
app.use(cors());

app.listen(3000)