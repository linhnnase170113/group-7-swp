import React from 'react'
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Badge } from '@mui/material';
import { useRouter } from 'next/router';
export default function CartButton() {
    const router = useRouter()
  return (
    <IconButton className="navbar" color="inherit" sx={{
        margin: "0 1rem",
        transform: "scale(1.2)"
      }} onClick={() => {
        router.push("/customer/cart")
      }}>
      <Badge badgeContent={4} color="error">
        <ShoppingBagIcon />
      </Badge>
    </IconButton>
  )
}
