import React, { useEffect, useState } from 'react'

const Home = () => {
  useEffect(()=>{
    const fetchWorkouts=async ()=>{
      await fetch('http://localhost:3000/api/workouts')
    }
  },[])
  return (
    <div className='home'>
        <h2>Home Page</h2>
    </div>
  )
}

export default Home