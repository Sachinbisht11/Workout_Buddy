const express=require("express");

const router=express.Router();

const Workout=require('../models/workoutModel')

/**
 * Route: /api/workouts
 * Method: Get
 * Description: Get all workouts
 * Access: Public
 * Parameters: None
 */
router.get('/',(req,res)=>{
    res.json({
        msg:"Get all workouts"
    })
})

/**
 * Route: /api/workouts/:id
 * Method: Get
 * Description: Get single workouts
 * Access: Public
 * Parameters: id
 */
router.get('/:id',(req,res)=>{
    res.json({
        msg:"get single workout by its id"
    })
})

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
router.delete('/:id',(req,res)=>{
    res.json({
        msg:"Delete a workout"
    })
})

/**
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its id
 * Access: Public
 * Parameters: id
 */
router.patch('/:id',(req,res)=>{
    res.json({
        msg:"Update a workout by its id"
    })
})

module.exports=router