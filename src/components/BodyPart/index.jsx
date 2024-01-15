import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Stack, Button } from '@mui/material'

import Banner from '../../assets/images/banner.png'

export const BodyPart = ({ data }) => {
  return (
    <div className="">
      {
        data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {item}
          </Box>
        ))
      }
    </div>
  )

}
