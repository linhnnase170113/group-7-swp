import React, { useContext } from "react";
import { setup } from "@/config/setup";
import { setOpen } from "@/feature/Alert";
import { Typography, Button, TextField } from "@mui/material";
import { useAppDispatch } from "@/feature/Hooks";
import { UserContext } from "@/component/login/AuthContext";
export default function DetailsInfor({ product }: any) {
  const dispatch = useAppDispatch();
  const { user } = useContext(UserContext);
  const handleAddtoCart = () => {
    if (user !== null) {
      dispatch(
        setOpen({
          open: true,
          message: "Adding success",
          severity: "success",
        })
      );
    } else {
      dispatch(
        setOpen({
          open: true,
          message: "You must login to use",
          severity: "error",
        })
      );
    }
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={
          {
            // fontWeight: "500"
          }
        }
      >
        {product.productName}
      </Typography>
      <div
        style={{
          margin: "1rem 0rem",
        }}
      >
        <Typography variant="h6">Giá sản phẩm: {product.price} VND </Typography>
        <Typography
          variant="h6"
          sx={{
            color: product.quantity > 0 ? setup.success : setup.error,
          }}
        >
          Số lượng: {product.quantity}
        </Typography>
      </div>
      <Typography variant="body1">Tình trạng: {product.status}</Typography>
      <Typography variant="body1">Thông tin: </Typography>
      <Typography variant="body1">{product.description}</Typography>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          disabled={product.quantity > 0 ? false : true}
          onClick={() => handleAddtoCart()}
          style={{
            fontSize: "0.9rem",
            backgroundColor: product.quantity > 0 ? setup.success : setup.error,
            color: "white",
          }}
        >
          {product.quantity > 0 ? "Add to Cart " : "Out of Stock"}
        </Button>
      </div>
    </>
  );
}
