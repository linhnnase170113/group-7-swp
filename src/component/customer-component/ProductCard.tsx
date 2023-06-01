import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setup } from "@/config/setup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { useRouter } from "next/router";
export default function ProductCard({ product }: any) {
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/customer/details?productId=${product.productId}`);
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={`/assets/images/${product.image}`}
        sx={{
          height: "13rem",
        }}
      />
      <CardContent sx={{
        paddingBottom: "0rem"
      }}>
      <Tooltip TransitionComponent={Zoom} title={product.productName}>
        <Typography gutterBottom component="div" sx={{
          overflow: "hidden",
          height: "3.1rem",
          fontWeight: "600",
          fontSize: "1.1rem"
        }}>
          {product.productName}
        </Typography>
        </Tooltip>
        <Typography variant="body1" color="text.secondary">
          {product.price} VND
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: product.quantity > 0 ? setup.success : setup.error,
          }}
        >
          {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          paddingTop: "0rem"
        }}
      >
        <Button>Chi tiết</Button>
        <IconButton size="large">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
