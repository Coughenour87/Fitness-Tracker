const db = require("../models");
module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate({_id : req.params.id}, {$push: {exercises: req.body}})
        .then(addedExercise => {
            res.json(addedExercise)
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(createdWorkout => {
            res.json(createdWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
    })
}