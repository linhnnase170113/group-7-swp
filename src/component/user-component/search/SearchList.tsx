import React from 'react'
import {Typography, Grid} from '@mui/material';
import ProductList from '../ProductList';


export default function SearchList({name} : any) {
    const test = ["0", "1", "2", "3", "4", "5", "6", "7"] 
  return (
        <>
        {name !== undefined ? (<Typography variant="h4">
            Kết quả tìm kiếm cho "{name}"
        </Typography>) : (<></>)}
        <Typography variant="subtitle1" sx={{
            fontWeight: "600",
            color:"gray",
            marginBottom: "2rem"
        }}>
           {test.length} sản phẩm tìm thấy
        </Typography>
        <ProductList productList={test}/>
        </>
  )
}
