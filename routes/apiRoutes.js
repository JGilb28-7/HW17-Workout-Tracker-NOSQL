// looking at the api.js 
//    using ("/api/workouts")
// using the mini project API as ref. 

const Workout = require("../models/workout");

module.exports = function(app) {

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
      app.get("/api/workouts", (req, res) => {
        Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

};