import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import { useRouter } from "next/router";
export default function HomeCategoryList({ category }: any) {
  const router = useRouter();
  return (
    <div
      style={{
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {category.categoryName.toUpperCase()}
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(`/customer/search?categoryId=${category.categoryId}`);
          }}
        >
          xem thêm
        </Typography>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ProductCard
              product=""
            />
          </Grid>
          <Grid item xs={3}>
            <ProductCard
              product=""
            />
          </Grid>
          <Grid item xs={3}>
            <ProductCard
              product=""
            />
          </Grid>
          <Grid item xs={3}>
            <ProductCard
              product=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
