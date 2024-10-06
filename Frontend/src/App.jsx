import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/home'; // Make sure Home is imported
import Login from './pages/login';
import Signup from './pages/signUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {/* Home component */}
      <Route path='/login' element={<Login />} /> {/* Login component */}
      <Route path='/signup' element={<Signup />} /> {/* Signup component */}
    </Routes>
  );
};

export default App;
