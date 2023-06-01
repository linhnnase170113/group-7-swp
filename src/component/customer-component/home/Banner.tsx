import { CardMedia } from '@mui/material'
import React from 'react'
export default function Banner({ children }: any) {
  return (
    <div>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg" style={{
          height: "28rem",
          marginTop: "10.2rem",
        }}
      />
      {children}
    </div>
  )
}
