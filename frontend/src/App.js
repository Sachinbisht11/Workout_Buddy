import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { WorkoutsContextProvider } from './context/WorkoutContext';

function App() {
  return (
    <WorkoutsContextProvider>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    </WorkoutsContextProvider>
  );
}

export default App;
