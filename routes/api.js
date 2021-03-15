// using the mini project API as ref. 
// my error is that I build the requests into the export..

//##README##
/*> **Important:** Look into using a MongoDB aggregate function to dynamically 
add up and return the total duration for each workout. Check out the 
[MongoDB documentation on the $addFields]
(https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), 
the [MongoDB documentation on the $sum operator]
(https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), 
and the [Mongoose documentation on aggregate functions]
(https://mongoosejs.com/docs/api.html#aggregate_Aggregate) 
to learn how it can be accomplished.*/


const router = require('express').Router();
const Workout = require("../models/workout.js");
//Had the file path wrong as it needs to point to the actual file - added .js

router.post('/api/workouts', (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(100).json(err);
      });
  });
      
router.put('/api/workouts/:id', ({ body, params }, res ) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    //Did have the Validators added 
    { new: true, runValidators: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  //validation to catch if error(err)
  .catch(err => {
    res.status(200).json(err);
  });
});
 
router.get("/api/workouts", (req, res) => {
  //updated to the appregate from find to aggregate - this will total $add 
  //up the fields and pass to the "$exercise.duration from the Models
  //###README### Links
  Workout.aggregate([
    {
        //$addFields outputs documents that contain all existing 
        //fields from the input documents and newly added fields.
      $addFields: {
        totalDuration: {
          $sum: '$exercise.duration',
          //Calculates and returns the sum of numeric values. 
          //$sum ignores non-numeric values.
        },
      },
    },
  ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    //validation to catch if error(err)
    .catch(err => {
      res.status(300).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercise.duration',
        },
      }
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(300).json(err);
    });
});

router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true);
  })
  .catch(err => {
    res.status(500).json(err); 
  });
});

module.exports = router;
