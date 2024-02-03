import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Detail } from '../components/Detail'
import { ExerciseVideos } from '../components/ExerciseVideos'


export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {

    }
    fetchExerciseData()

  }, [id])

  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
      ExerciseDetail</Box>
  )
}
