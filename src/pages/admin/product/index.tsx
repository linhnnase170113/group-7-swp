import React, { useEffect, useState } from "react";
import ProductTable from "@/component/admin-component/Product/ProductTable";
import AdminLayout from "@/layout/AdminLayout";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { getProductListApi } from "@/api/ProductApi";
export default function Product() {
    const [productList, setProductList] = useState()
    useEffect(() => {
        const getProductList =async () => {
            const productList = await getProductListApi()
            setProductList(productList)
            console.log(productList)
        }
        getProductList()
    }, [])
  return (
    <AdminLayout>
      <Fab color="success" aria-label="edit">
        <AddIcon />
      </Fab>
      {productList !== undefined ? <ProductTable productList={productList} /> : null}
    </AdminLayout>
  );
}
