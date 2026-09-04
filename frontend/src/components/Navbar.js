import React from 'react'
import { NavLink } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout}=useLogout();
  const {user}=useAuthContext();

  const handleClick=()=>{
    logout();
  }
  return (
    <div>
        <header>
            <div className='container'>
                <NavLink to='/'><h1>Workout Budyyy</h1></NavLink>
                <nav>{user &&(
                  <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                  </div>
                  )
                  }
                  {!user && (
                  <div>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/signup'>Signup</NavLink>
                  </div>
                )}
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar