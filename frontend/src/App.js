import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthContextProvider>
    <WorkoutsContextProvider>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    </WorkoutsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
