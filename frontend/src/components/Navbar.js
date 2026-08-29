import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className='container'>
                <NavLink to='/'><h1>Workout Budyyy</h1></NavLink>
            </div>
        </header>
    </div>
  )
}

export default Navbar