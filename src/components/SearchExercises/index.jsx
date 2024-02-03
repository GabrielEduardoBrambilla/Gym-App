import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from '../../utils/fetchData'
import { HorizontalScrollbar } from '../HorizontalScrollbar'


export const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [Search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchExerciseData = async () => {
      const options = { ...exerciseOptions }
      options.url = options.url.concat('/bodyPartList')

      const data = await fetchData(options)

      setBodyParts(['all', ...data])
      const optionsExercise = { ...exerciseOptions }
      optionsExercise.params.limit = 150;
      const response = await fetchData(optionsExercise)
      setExercises(response.data)
    }
    fetchExerciseData()
  }, [])

  const handleSearch = async () => {
    if (Search) {

      const options = { ...exerciseOptions }
      options.params.limit = 150;
      const response = await fetchData(options)

      const searchedExercises = response.filter(
        (item) => item.name.toLowerCase().includes(Search)
          || item.target.toLowerCase().includes(Search)
          || item.equipment.toLowerCase().includes(Search)
          || item.bodyPart.toLowerCase().includes(Search),
      );

      setSearch('')
      setExercises(searchedExercises)
    }

  }

  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px'
          }
        }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercise you <br />Should Know
      </Typography>
      <Box
        position={"relative"}
        mb="72px"
      >
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700", border: "none", borderRadius: "4px"
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            background: "#FFF",
            borderRadius: "40px"
          }}
          value={Search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder='Search Exercises'
          type="text"
        />

        <Button
          className='search-btn'
          sx={
            {
              bgcolor: "#FF2625",
              color: "#FFF",
              textTransform: "none",
              width: {
                lg: "173px", xs: "80px"
              },
              fontSize: { lg: "20px", xs: "14px" },
              height: '56px',
              position: "absolute",
              right: "0"

            }
          }
          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
      <Box
        sx={{ position: "relative", width: "100%", p: '20px' }}

      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )

}
