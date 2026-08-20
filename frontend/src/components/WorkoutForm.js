import React, { useState } from 'react'

const WorkoutForm = () => {

    
    const [title,setTitle]=useState('');
    const [load,setLoad]=useState('');
    const [reps,setReps]=useState('');
    const [error,setError]=useState(null);

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const workout={title,load,reps};
        const response=await fetch('/api/workouts',{
            method: 'POST',
            body:JSON.stringyfy(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=response.json();
        if(!response.ok){
            setError(json.error)
        }
        setError(null);
        setTitle('');
        setLoad('');
        setReps('');
        console.log('new workout added',json);
    }
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>
        <label>Exercise Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Set Load : (in Kgs)</label>
        <input type='number' value={load} onChange={(e)=>setLoad(e.target.value)} />
        <label>Number of Reps : </label>
        <input type='number' value={reps} onChange={(e)=>setReps(e.target.value)} />


        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm