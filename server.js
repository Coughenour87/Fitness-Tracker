const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
 const db = require('./models')
app.get("/", (req, res) => {
    res.sendFile (path.join(__dirname,"./public/index.html"))
})
app.get("/api/workouts", (req, res)=>{
    db.Workout.find()
    .then(workoutResults=>{
        console.log(workoutResults)
        res.json(workoutResults)
    })
    .catch(
        err=>res.json(err)
    )
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
