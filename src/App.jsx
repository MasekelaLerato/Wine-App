import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import ListOfWines from './components/ListOfWines'

function App() {
  return (
    <div className='text-black h-[100vh] flex justify-center bg-cover' style={{"backgroundImage": "url('../src/assets/hero image.jpg')",  backgroundSize: "cover"}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<ListOfWines />} />
      </Routes>
    </div>
  );
}

export default App;
