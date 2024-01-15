import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Stack, Button } from '@mui/material'

import Banner from '../../assets/images/banner.png'

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '221px', xs: '70px' },
        ml: { sm: '50px' }
      }} position={"relative"} p="20px"
    >
      <Typography
        color='#FF2625'
        fontWeight={"600"}
        fontSize={"26px"}
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: { lg: '44px', xs: '40px' },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat, smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Check out the most efficient exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ background: "#FF2625", padding: "10px" }}> Explore Exercises</Button>
      <Typography
        color="#FF2625"
        fontWeight={600}
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: 'none' }
        }}>
        Exercise
      </Typography>

      <img src={Banner} alt="banner" className="hero-banner-img" />
    </Box>
  )

}
