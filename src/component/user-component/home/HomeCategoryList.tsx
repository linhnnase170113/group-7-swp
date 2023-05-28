import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ItemCard from "../ItemCard";

export default function HomeCategoryList({ title }: any) {
  return (
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem"
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography
          sx={{
            cursor: "pointer"
          }}
        >
          xem thêm
        </Typography>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ItemCard />
          </Grid>
          <Grid item xs={3}>
            <ItemCard />
          </Grid>
          <Grid item xs={3}>
            <ItemCard />
          </Grid>
          <Grid item xs={3}>
            <ItemCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
