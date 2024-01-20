import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'



export const ExercisesCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}   >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    </Link>
  )

}
