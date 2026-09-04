import React from 'react'
import { NavLink } from 'react-router-dom'
import useLogout from '../hooks/useLogout'


const Navbar = () => {
  const {logout}=useLogout();

  const handleClick=()=>{
    logout();
  }
  return (
    <div>
        <header>
            <div className='container'>
                <NavLink to='/'><h1>Workout Budyyy</h1></NavLink>
                <nav>
                  <div>
                    <button onClick={handleClick}>Log out</button>
                  </div>
                  <div>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/signup'>Signup</NavLink>
                  </div>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar