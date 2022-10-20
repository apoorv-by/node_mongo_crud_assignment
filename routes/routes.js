const express = require("express")
const { route } = require("express/lib/router")

const router = express.Router()

const controller1 = require("../controller/LearnerController")
const controller2 = require("../controller/CourseController")

//API paths

router.post("/add-learner", controller1.addLearner)
router.get("/get-all-learner", controller1.getAllLearner)
router.get("/getLearnerbyname", controller1.getLearnerByName)
router.put("/update-password", controller1.updatePassword)
router.delete("/delete-learner",controller1.deleteLearnerByName)

router.post("/add-course", controller2.addCourse)
router.get("/get-all-course", controller2.getAllCourse)
router.get("/getCoursebyname", controller2.getCourseByName)
router.delete("/delete-course",controller2.deleteCourseByName)

module.exports = router