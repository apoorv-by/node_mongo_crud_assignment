const mongoose = require("mongoose")

//creating a schema on type of data communicated on monogdb

const LearnerSchema = new mongoose.Schema({
    learner_name:{
        type:String,
        required:true
    },
    learner_email:{
        type:String,
        required:true
    },
    learner_password:{
        type:String,
        required:true
    }})

    // var a = 10
    // module.exports = a -> can be used anywhere using require(a)
    module.exports = mongoose.model("learner", LearnerSchema)
