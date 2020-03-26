 const path = require("path");
const router = require("express").Router()


router.get("/", (req, res) => {
    console.log('this has been hit')
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/exercise", (req, res) => {
    console.log('here here')
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;

// const path = require("path");

// module.exports = function () {
//     app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     })

//     app.get("/exercise", (req, res) => {
//         console.log('bananana')
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     })

//     app.get("/stats", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     })
// }