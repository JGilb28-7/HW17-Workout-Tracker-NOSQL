/*  cardioNameInput.value = "";
  nameInput.value = "";
  setsInput.value = "";
  distanceInput.value = "";
  durationInput.value = "";
  repsInput.value = "";
  resistanceDurationInput.value = "";
  weightInput.value = "";*/ 
  //Pull the list from the exercise.js to get ther types for the schema
  // using the sim structure as sequelize with the mongose exc. NOSQL 14 as sample ref.

const { time } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day:{
    type: String
  },
  cardioName: {
    type: String,
    
  },
  sets: {
    type: Number,
   
  },
  distance: {
    type: String,
 
  },
  duration:{
    type: String,
  },
  reps:{
    type: Number,
  }, 
  resistanceDuration:{
    type: Number
  },
  weight:{
    type: String
  },

});

const Workout = mongoose.model("Workouts", workoutSchema);
module.exports = Workout;
