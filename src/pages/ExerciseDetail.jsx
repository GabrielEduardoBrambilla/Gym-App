import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Detail } from '../components/Detail'
import { ExerciseVideos } from '../components/ExerciseVideos'
import { exerciseOptions, fetchData } from '../../utils/fetchData'


export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercises/${id}`, exerciseOptions)

      setExerciseDetail(exerciseDetailData)
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
