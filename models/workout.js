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

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day:{
    type: Date,
    
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter type"
      },
      name: {
        type: String,
        required: "Entername" 
      },
      duration: {
        type: Number,
        required: "Enter duration"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workouts", workoutSchema);
module.exports = Workout;
