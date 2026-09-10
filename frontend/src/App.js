import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {user}=useAuthContext();
  return (
    <AuthContextProvider>
    <WorkoutsContextProvider>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    </WorkoutsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
