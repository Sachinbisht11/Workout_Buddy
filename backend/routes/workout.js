const express=require("express");

const router=express.Router();

const Workout=require('../models/workoutModel')

const {createWorkout, getAllWorkouts, singleWorkout, deleteWorkout, updateWorkout}=require('../controllers/workoutController')

const requireAuth=require('../middleware/requireAuth')

//require auth for all workout routes
router.use(requireAuth)


/**
 * Route: /api/workouts
 * Method: Get
 * Description: Get all workouts
 * Access: Public
 * Parameters: None
 */
router.get('/',getAllWorkouts);

/**
 * Route: /api/workouts/:id
 * Method: Get
 * Description: Get single workouts
 * Access: Public
 * Parameters: id
 */
router.get('/:id',singleWorkout);

/**
 * Route: /api/workouts
 * Method: POST
 * Description: Create/Add new workout
 * Access: Public
 * Parameters: None
 */
router.post('/',createWorkout);

/**
 * Route: /api/workouts/:id
 * Method: DELETE   
 * Description: Delete a workout
 * Access: Public
 * Parameters: id
 */
router.delete('/:id',deleteWorkout);

/**
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its id
 * Access: Public
 * Parameters: id
 */
router.patch('/:id',updateWorkout);




module.exports=router