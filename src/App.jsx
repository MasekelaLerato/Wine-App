import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='text-white h-[100vh] flex justify-center bg-cover' style={{ backgroundColor: 'red' }}>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
