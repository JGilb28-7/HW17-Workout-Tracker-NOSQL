/*  your routes you will need 4 of them. 
Two are of the same type that will connect with the stats.js page, 
so make sure to connect to the proper workout database. 
As when you create and put the information you want to connect to your database, 
with the other two routes will need to show the workouts on via the stats page to 
render on the dashboard.*/

const router = require("express").Router();
const path = require("path");

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
  // I need to export the file to be picked up on front end 

  module.exports = router;