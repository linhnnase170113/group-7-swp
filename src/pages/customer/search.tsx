import UserLayout from '@/layout/CustomerLayout'
import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import { useRouter } from 'next/router'
import Filter from '@/component/customer-component/search/Filter';
import SearchList from '@/component/customer-component/search/SearchList';
import { getProductListApi, getProductListByCategoryApi, getProductListByNameApi } from '@/api/ProductApi';
import { block } from '@/config/setup';

export default function Search() {
    const router = useRouter();
    const { productName, categoryId } = router.query
    const [productList, setProductList] = useState<any>([])
    useEffect(() => {
      const getProductListByName = async () => {
        setProductList(await getProductListByNameApi(block(productName)))
      }
      const getProductListByCategory =async () => {
        setProductList(await getProductListByCategoryApi(categoryId))
      }
      const getProductList = async () => {
        setProductList(await getProductListApi())
      }
      if (productName !== undefined) {
        getProductListByName()
      } else if (categoryId !== undefined) {
        getProductListByCategory()
      } else {
        getProductList()
      }
    }, [productName, categoryId])
  return (
    <UserLayout>
        <Grid container spacing={2}>
            <Grid item xs={3}><Filter/></Grid>
            <Grid item xs={9}><SearchList productList={productList} productName={productName}/></Grid>
        </Grid>
    </UserLayout>
  )
}
