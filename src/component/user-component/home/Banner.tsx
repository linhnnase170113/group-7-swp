import { CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
export default function Banner() {
  return (
    <div>
        <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg" style={{
          height: "30rem"
        }}
      />
    </div>
  )
}
