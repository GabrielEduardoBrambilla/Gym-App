import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { BodyPart } from '../BodyPart'


export const HorizontalScrollbar = ({ data }) => {
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
            <BodyPart item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))
      }
    </div>
  )

}
