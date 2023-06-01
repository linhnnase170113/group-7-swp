import { CardMedia } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/customer")
  })
  return (
    <>
    <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
      />
    </>
  )
}
