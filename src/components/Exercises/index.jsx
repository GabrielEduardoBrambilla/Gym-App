import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { ExercisesCard } from '../ExercisesCard'


export const Exercises = ({ exercises, setExercises, bodyPart }) => {

  return (
    <Box
      id="exercises"
      mt='50px'
      p='20px'
      sx={{ mt: { lg: '110px' } }}
    >
      <Typography variant='h3' mb={"46px"}>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{
          gap: {
            lg: '110px', xs: '50px'
          }
        }}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={'flex-end'}
      >
        {exercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}

      </Stack>

    </Box>
  )

}
