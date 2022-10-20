const CourseModel = require("../model/CourseModel")

exports.addCourse = (req,res) => {
    const course = new CourseModel({
        course_Id:req.body.course_Id,
        course_name:req.body.course_name,
        course_description:req.body.course_description
    })

    course.save().
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.getAllCourse = (req,res)=>{
    const course = CourseModel.find()

    course.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.getCourseByName = (req,res) => {

    const course = CourseModel.find({course_name:req.query.course_name})

    course.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

//delete course
exports.deleteCourseByName = (req,res) => {
    CourseModel.deleteOne({course_name:req.query.course_name}, () => {
        res.status(200).json({
            message : "Successfully deleted " +req.query.course_name+ " course"
        })
    })
}

