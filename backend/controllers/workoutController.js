const Workout=require('../models/workoutModel');

// get all workouts
const getAllWorkouts=async(req,res)=>{
    try{
        const workouts=(await Workout.find()).toSorted({createdAt:-1});
        res.status(200).json(workouts)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// get a single workout by its id
const singleWorkout=async(req,res)=>{
    const {id}=req.params;
    try{
        const workout=await Workout.findById(id);
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// create a new workout
const createWorkout=async(req,res)=>{
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
const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    try{
        const workout=await Workout.findByIdAndDelete(id);
        res.status(200).json(Workout);
    }
    catch(error){
        res.status(404).json({error:error.message});
    }
}

// update a workout by its id
const updateWorkout=async(req,res)=>{
    const {id}=req.params;
    try{
        const workout=await Workout.findOneAndUpdate({_id:id},{...req.body},{new:true});
        res.status(200).json(Workout);
    }
    catch(error){
        res.status(404).json({error:error.message});
    }
}


module.exports={createWorkout, getAllWorkouts, singleWorkout, deleteWorkout, updateWorkout}