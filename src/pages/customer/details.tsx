import { setup } from "@/config/setup";
import UserLayout from "@/layout/UserLayout";
import { Paper, CardMedia, Grid, Typography, Button } from "@mui/material";
import React from "react";
export default function Details() {
 const string = "LEGO bình hoa "
  const information = ["Xu?t x?: Vi?t Nam","Ch?t li?u: g?, kim lo?i","Nhân v?t b?ng g?: 4 x 4 x 6 cm", "Chuông: 3 x 3 x 3 cm;", "T?ng chi?u dài: 15 cm"]
  return (
    <UserLayout>
      <Paper sx={{
        padding: {
          lg: "3rem",
          sm: "0rem"
        }
      }}>
        <Grid container>
        <Grid item xs={5} sx={{
          padding: "2rem",
          border: "1px solid gray",
          borderRadius: "1rem"
        }}>
        <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/1.jpg" />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Typography variant="h4" sx={{
            // fontWeight: "500"
          }}>{string.toUpperCase()}</Typography>
          <div style={{
            margin: "1rem 0rem"
          }}>
          <Typography variant="h6">Giá sản phẩm: 62000 VND </Typography>
          <Typography variant="h6" sx={{
            color: 5> 0? setup.success : setup.error,
          }}>Số lượng: 5</Typography>
          </div>
          <Typography variant="body1">Tình trạng: mới</Typography>
          <Typography variant="body1">Thông tin: </Typography>
          {information.map((infor, key) => (
          <Typography 
            variant="body1"
            key={key}
          >{infor}</Typography>
          ))}
          <div style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center"
          }}>
            <input type="number" value={1} style={{
              width: "4rem",
              height: "2rem",
            }}/>
            <Button variant="contained" style={{
              fontSize: "0.9rem",
              backgroundColor: 5> 0? setup.success : setup.error,
              color: "white"
            }}>Add to Cart</Button>
          </div>
        </Grid>
        </Grid>
      </Paper>
    </UserLayout>
  );
}
