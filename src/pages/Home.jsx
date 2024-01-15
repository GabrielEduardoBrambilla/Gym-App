import { Box } from '@mui/material'
import React, { useState } from 'react'
import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'

export const Home = () => {
  const [exercise, setExercise] = useState([])
  const [bodypart, setBodypart] = useState("all")

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercise={setExercise} bodyPart={bodypart} setBodyPart={setBodypart} />
      <Exercises setExercise={setExercise} bodyPart={bodypart} setBodyPart={setBodypart} />
    </Box>
  )
}
