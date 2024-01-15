import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='text-black h-[100vh] flex justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/hero image.jpg')",  backgroundSize: "cover"}}>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
