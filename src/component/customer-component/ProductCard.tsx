import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setup } from "@/config/setup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
export default function ProductCard({ product }: any) {
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/1.jpg"
        sx={{
          height: "13rem",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          LEGO hoa lan
        </Typography>
        <Typography variant="body1" color="text.secondary">
          620000 VND
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 1 > 0 ? setup.success : setup.error,
          }}
        >
          {1 > 0 ? "Còn hàng" : "Hết hàng"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto"
        }}
      >
        <Button onClick={() => {
           router.push(`/customer/details?productID=${1}`)
        }}>Chi tiết</Button>
        <IconButton size="large" onClick={() => {
      }}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
