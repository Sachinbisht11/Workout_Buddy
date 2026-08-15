const Workout=require('../models/workoutModel');

// get all workouts

// get a single workout by its id

// create a new workout
constcreateWorkout=async(req,res)=>{
    const {title, load, reps}=req.body;

    try{
        const workout=await Workout.create({title, load, reps});
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout by its id

// update a workout by its id



module.exports={createWorkout}