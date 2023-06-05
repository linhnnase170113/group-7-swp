import { Grid, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
export default function ChangeQuatityButton({quantity}: any) {
    useEffect(() => {

    }, [quantity])
  return (
    <Grid container spacing={0} sx={{
        "& .MuiInputBase-root" : {
            borderRadius: "0px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "0px",
        },
        border: "1px solid black",
        borderRadius: "1rem"
    }}>
        <Grid item xs={4} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            cursor: "pointer"
        }} onClick={() => {
            console.log("fetch")
        }}><><RemoveIcon/></></Grid>
        <Grid item xs={4}><TextField sx={{
            borderRadius: "0px"
        }} type="number" color="success" size="small" defaultValue={quantity} /></Grid>
        <Grid item xs={4} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            cursor: "pointer"
        }} onClick={() => {
            console.log("fetch")
        }}><AddIcon/></Grid>
    </Grid>
  )
}
