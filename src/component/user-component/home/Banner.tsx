import { CardMedia } from '@mui/material'
import React from 'react'
export default function Banner() {
  return (
        <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg" style={{
          height: "30rem"
        }}
      />
  )
}
