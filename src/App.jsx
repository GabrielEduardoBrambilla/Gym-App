import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import { ExerciseDetail } from './pages/ExerciseDetail'
import { NavBar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  )
}
