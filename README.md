# HW17-Workout-Tracker-NOSQL
Unit 17 NoSQL Homework: Workout Tracker

## resources used:
  removed the ref.  as the API were incorrect in the first attempt
  fix the Routes name to match those on the Public api.js
  commented out all my fixes and ref. 
  
## HW Task List for Workout Tracker
Create Mongo database with a Mongoose schema and handle routes with Express

* want to be able to
  * view 
  * create
  * track daily workouts

  * track the 
    * name, 
    * type, 
    * weight, 
    * sets, 
    * reps, and 
    * duration of exercise

## Acceptance Criteria
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.
 
> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)