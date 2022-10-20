const mongoose = require("mongoose")

//creating a schema on type of data communicated on monogdb

const CourseSchema = new mongoose.Schema({
    course_Id:{
        type:Number,
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    course_description:{
        type:String,
        required:true
    }})

    // var a = 10
    // module.exports = a -> can be used anywhere using require(a)
    module.exports = mongoose.model("course", CourseSchema)
