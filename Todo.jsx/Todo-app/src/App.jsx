import React from 'react'
import './App.css'
import Home from './Components/Home'
import Adddata from './Components/Adddata'
import { Route, Routes } from 'react-router'
  
function App() {
  
  return (
    <>
    
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Adddata/>}/>
      
     </Routes>
    </>
  )
}

export default App
