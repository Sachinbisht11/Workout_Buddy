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
router.get('/',(res,req)=>{
    res.json({
        msg:"get all workouts"
    })
})

/**
 * Route: /api/workouts/:id
 * Method: Get
 * Description: Get single workouts
 * Access: Public
 * Parameters: id
 */
router.get('/:id',(res,req)=>{
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
router.post('/',(res,req)=>{
    const {title, load, reps}=req.body;

    try{
        const workout=await Workout.create();
        res.statusCode(200).json(workout)
    }
    catch(error){

    }
    res.json({
        msg:"Create/Add new workout"
    })
})

/**
 * Route: /api/workouts/:id
 * Method: DELETE   
 * Description: Delete a workout
 * Access: Public
 * Parameters: id
 */
router.delete('/:id',(res,req)=>{
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
router.patch('/:id',(res,req)=>{
    res.json({
        msg:"Update a workout by its id"
    })
})

module.exports=router