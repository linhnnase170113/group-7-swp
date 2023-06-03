import React from 'react'
import {Typography, Grid} from '@mui/material';
import ProductList from '../ProductList';
import Loading from '@/component/Loading';


export default function SearchList({productList, productName} : any) {
  return (
        <>
        {productName !== undefined ? (<Typography variant="h4">
            {`Kết quả tìm kiếm cho "${productName}"`}
        </Typography>) : (<></>)}
        {productList !== null ? (<>\
          <Typography variant="subtitle1" sx={{
            fontWeight: "600",
            color:"gray",
            marginBottom: "2rem"
        }}>
           {productList.length} sản phẩm tìm thấy
        </Typography>
        <ProductList productList={productList}/></>) : <Loading/>}
        </>
  )
}
