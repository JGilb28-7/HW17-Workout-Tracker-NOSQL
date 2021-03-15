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
    default: () => new Date(),
    
  },
// from central grading comments 2.11.2021
  //exercises: [ { type: { type: String, trim: true, required: 'Enter an exercise type', }
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter Name of the exercise" 
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter duration of thr exercise"
      },
      weight: {
        type: Number,
        trim: true,
    
      },
      reps: {
        type: Number,
        trim: true,
   
      },
      sets: {
        type: Number,
        trim: true,

      },
      distance: {
        type: Number,
        trim: true,

    },
  },
  ]
});

const Workout = mongoose.model("Workouts", workoutSchema);
module.exports = Workout;
