import React from 'react'
import { setup } from "@/config/setup";
import { setOpen } from "@/feature/Alert";
import { Typography, Button } from "@mui/material";
import { useAppDispatch } from '@/feature/Hooks';
export default function DetailsInfor({product} : any) {
    const dispatch = useAppDispatch()
  return (
    <>
    <Typography variant="h4" sx={{
            // fontWeight: "500"
          }}>{product.productName}</Typography>
          <div style={{
            margin: "1rem 0rem"
          }}>
          <Typography variant="h6">Giá sản phẩm: {product.price} VND </Typography>
          <Typography variant="h6" sx={{
            color: product.quantity> 0? setup.success : setup.error,
          }}>Số lượng: {product.quantity}</Typography>
          </div>
          <Typography variant="body1">Tình trạng: {product.status}</Typography>
          <Typography variant="body1">Thông tin: </Typography>
          <Typography 
            variant="body1"
          >{product.description}</Typography>
          <div style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center"
          }}>
            <input type="number" defaultValue={1} style={{
              width: "4rem",
              height: "2rem",
            }}/>
            <Button variant="contained" 
              disabled= {product.quantity > 0 ? false : true}
              onClick={() => {
              dispatch(
                setOpen({
                  open: true,
                  message: "Adding success",
                  severity: "success",
                })
              );
            }} style={{
              fontSize: "0.9rem",
              backgroundColor: product.quantity> 0? setup.success : setup.error,
              color: "white"
            }}>{product.quantity > 0 ? "Add to Cart " : "Out of Stock"}</Button>
          </div>
    </>
  )
}
