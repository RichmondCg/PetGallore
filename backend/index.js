const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./config/dbConnect")
app.use(cors());
app.use(express.json());
//imports routes
const petRoute = require("./routes/pet.router");

app.use("/pet", petRoute);

app.listen(8080, () => {
    console.log("listening on port 8080");
    
});