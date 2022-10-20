const LearnerModel = require("../model/LearnerModel")

exports.addLearner = (req,res) => {
    const learner = new LearnerModel({
        learner_name:req.body.learner_name,
        learner_email:req.body.learner_email,
        learner_password:req.body.learner_password
    })

    learner.save().
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.getAllLearner = (req,res)=>{
    const learner = LearnerModel.find()

    learner.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.getLearnerByName = (req,res) => {

    const learner = LearnerModel.find({learner_name:req.query.learner_name})

    learner.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.updatePassword=(req,res)=>{

    LearnerModel.findOne({learner_name:req.query.learner_name},(error,learner)=>{

        if(error) res.send(error)

        learner.learner_password=req.body.learner_password ? req.body.learner_password: learner.learner_password

        learner.save((error)=>{

            if(error) res.send(error)

            res.status(200).json({

                message:"Successfully updated " + req.query.learner_name+"'s password",
                data:learner
            })
        })
    })
}

//delete learner
exports.deleteLearnerByName = (req,res) => {
    LearnerModel.deleteOne({learner_name:req.query.learner_name}, () => {
        res.status(200).json({
            message : "Successfully deleted " +req.query.learner_name+ " Learner"
        })
    })
}

