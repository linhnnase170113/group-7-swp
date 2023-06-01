import { Grid, Pagination } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ productList } : any) {
    const [page, setPage] = useState(1)
  return (
   <>
    <Grid container spacing={2} sx={{
      marginBottom: "1rem",
    }}>
        {productList.slice(0 +(page-1)*9, page*9).map((product: any, key: any) => (
            <Grid item xs={4} key={key}><ProductCard product={product}/></Grid>
        ))}
    </Grid>
    <Pagination count={Math.floor(productList.length / 9) +1} page={page} onChange={(_, value) => {
        setPage(value);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }} sx={{
      float:"right"
    }}/>
   </>
  )
}
