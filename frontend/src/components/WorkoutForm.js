import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import {useAuthContext} from '../hooks/useAuthContext';

const WorkoutForm = () => {

    const {dispatch} = useWorkoutContext();
    const {user} = useAuthContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in');
            return;
        }
        const workout = { title, load, reps };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`, {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error)
        } else {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            console.log('new workout added', json);
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }
    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Exercise Title</label>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Set Load : (in Kgs)</label>
            <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} />
            <label>Number of Reps : </label>
            <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} />


            <button>Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default WorkoutForm