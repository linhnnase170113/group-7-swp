import { CardMedia } from '@mui/material'
import React from 'react'

export default function DetailsImg({image} : any) {
  return (
    <CardMedia
        component="img"
        alt="green iguana"
        image={"/assets/images/" + image} />
  )
}
