import { Box } from '@mui/material'
import React, { useState } from 'react'
import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'

export const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodypart, setBodypart] = useState("all")

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodypart} setBodyPart={setBodypart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodypart} />
    </Box>
  )
}
