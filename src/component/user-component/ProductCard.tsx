import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({product} : any) {
  return (
    <Card
      onClick={() => {}}
      sx={{
        maxWidth: 345,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
        sx={{
          height: "13rem",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          float: "right",
        }}
      >
        <Button size="small">Mua ngay</Button>
        <Button size="small">Thêm giỏ hàng</Button>
      </CardActions>
    </Card>
  );
}
