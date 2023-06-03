import { setup } from "@/config/setup";
import { Button, Paper, Typography } from "@mui/material";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";
import { useRouter } from "next/router";

export default function NavigationLeft() {
  const router = useRouter();
  const navBarLeftItems = [
    { name: "Product", url: "/admin/product" },
    { name: "Account", url: "/admin/account" },
    { name: "Order", url: "/admin/order" },
  ];
  return (
    <Paper
      sx={{
        width: "calc(100%/12*1.7)",
        height: "100vh",
        position: "fixed",
        backgroundColor: "#0f1a34",
        color: setup.color,
        boxShadow: "none",
      }}
    >
      <div style={{
        backgroundColor: "#182444"
      }}>
        <Button
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "700",
            height: "80px",
            fontFamily: 'Camel'
          }}
          fullWidth
        >
          {/* <CardGiftcardSharpIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        /> */}
          {setup.name}
        </Button>
      </div>
      {navBarLeftItems.map((navBarLeftItem, key) => (
        <Typography
          key={key}
          sx={{
            cursor: "pointer",
            color: "white",
            fontWeight: "500",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 1.4rem 1rem 1.4rem",
            ":hover" : {
              backgroundColor: "#091023",
            }
          }}
          onClick={() => {
            router.push(navBarLeftItem.url);
          }}
        >
          {navBarLeftItem.name}<KeyboardArrowRightIcon />
        </Typography>
      ))}
    </Paper>
  );
}
// #091023;