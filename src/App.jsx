import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
