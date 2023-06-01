import { setup } from "@/config/setup";
import UserLayout from "@/layout/CustomerLayout";
import { Paper, CardMedia, Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function Details() {
  const router = useRouter()
  const { productId } = router.query
  const [product, setProduct] = useState<any>(null)
  const string = "Lego Hoa"
  const infor = "Hàng có sẵn tại Shop Lego 40460 Rose - Hoa hồng Sản phẩm đi kèm hướng dẫn lắp ráp - Thương hiệu đồ chơi tới từ Đan Mạch ( mới nguyên hộp - new sealed )"
  useEffect(() => {
    const getProduct = async () => {
      
    }
  }, [product])
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
          }}>{string}</Typography>
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
          <Typography 
            variant="body1"
          >{infor}</Typography>
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
