// looking at the api.js 
//    using ("/api/workouts")
// using the mini project API as ref. 
var db = require("../models");
const Workout = require("../models/workout");

module.exports = function(db) {

    db.post("/api/transaction", ({ body }, res) => {
        Workout.create(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
      db.post("/api/workouts", ({ body }, res) => {
        Workout.insertMany(body)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
      db.get("/api/", (req, res) => {
        Workout.find({})
          .sort({ date: -1 })
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
      
      module.exports = db;
      
 
};