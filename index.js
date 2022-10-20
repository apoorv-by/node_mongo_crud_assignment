//importing express module
const express = require("express")

//importing mongoDB module
const mongoose = require("mongoose")

//importing routes module
const router = require("./routes/routes")

// initializing exrpess app
const app = express()

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use(express.json())

app.use("/", router)

//connecting to the database
const uri = "mongodb+srv://apoorv:<>@cluster0.7mws5v8.mongodb.net/student_nodejs?retryWrites=true&w=majority"
mongoose.
connect(uri, {useNewUrlParser:true}).
then(()=>{console.log("Database Connected")}).
catch((error)=>{console.log(error)})

