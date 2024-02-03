import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import { ExercisesCard } from '../ExercisesCard'
import { fetchData, exerciseOptions } from '../../utils/fetchData'
import { Loader } from '../Loader';


export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {

      const options = { ...exerciseOptions }
      options.params.limit = 150;
      if (bodyPart === 'all') {
      } else {
        options.url = options.url.concat(`/bodyPart/${bodyPart}`)
      }
      console.log(options.url)
      console.log(options.url)
      console.log(options.url)
      const response = await fetchData(options)
      setExercises(...response)
      console.log(response)
      console.log(response[1])
      console.log(exercises)
    }
    fetchExercisesData()
  }, [bodyPart])

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: "smooth" })
  }

  if (!currentExercises.length) return <Loader />;

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
        {currentExercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}

      </Stack>
      <Stack mt='100px' alignItems={"center"} >
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )
        }

      </Stack>


    </Box>
  )

}
