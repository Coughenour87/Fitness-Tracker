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
        db.Workout.findByIdAndUpdate (
            req.params.id, {$push: {exercises: req.body}},
            {runValidators:true, new: true})
        .then(results => res.json(results))
        .catch(err => {
            console.log(err);
        })
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            console.log(err)
        })
    });
};