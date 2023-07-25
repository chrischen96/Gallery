import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collenctions from './pages/Collenction'
import About from './pages/About'
import Login from './pages/Login'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collenctions" element={<Collenctions />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default Main