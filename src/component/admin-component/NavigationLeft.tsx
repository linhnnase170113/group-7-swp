import { setup } from '@/config/setup'
import { Button, Paper, Typography } from '@mui/material'
import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import React from 'react'
import { useRouter } from 'next/router';

export default function NavigationLeft() {
  const router = useRouter()
  const navBarLeftItems = [
    { name: "Product", url: "/admin/product" },
    { name: "Account", url: "/admin/account" },
    { name: "Order", url: "/admin/order" }
  ]
  return (
    <Paper sx={{
      width: "calc(100%/12*2.5)", height: "100vh", position: "fixed", backgroundColor: "#FF9900",
      color: setup.color,
      boxShadow: "none",
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          display: {
            xs: "none", sm: "flex", cursor: "pointer",
            letterSpacing: '.1rem', padding: "1rem",
            borderBottom: "1px solid gray",
            alignItems: "center"
          },
        }}
        color="white"
      >
        <CardGiftcardSharpIcon sx={{
          width: "2.5rem",
          height: "2.5rem"
        }} />{setup.name}
      </Typography>
      {navBarLeftItems.map((navBarLeftItem, key) => (
        <Typography key={key} sx={{
          cursor: "pointer",
          width: "100%",
          color: "white",
          padding: "1rem",
        }}
          onClick={() => {
            router.push(navBarLeftItem.url)
          }}
          variant="h5">{navBarLeftItem.name}
        </Typography>

      ))}
    </Paper>
  )
}
