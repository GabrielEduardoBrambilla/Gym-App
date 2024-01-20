import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Stack, Button } from '@mui/material'
import Icon from '../../assets/icons/gym.png'
import Banner from '../../assets/images/banner.png'

export const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#FFF",
        borderBottomLeftRadius: "20px",
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize={"24px"} fontWeight={"bold"} color={"#3a1212"}>{item}</Typography>
    </Stack >
  )

}
