import React, { useEffect, useState } from "react";
import ProductTable from "@/component/admin-component/Product/ProductTable";
import AdminLayout from "@/layout/AdminLayout";

import { getProductListApi } from "@/api/ProductApi";
import Loading from "@/component/Loading";
export default function Product() {
    const [productList, setProductList] = useState()
    useEffect(() => {
        const getProductList =async () => {
            const productList = await getProductListApi()
            setProductList(productList)
        }
        getProductList()
    }, [])
  return (
    <AdminLayout>
      {productList !== undefined ? <ProductTable productList={productList} /> : <Loading/>}
    </AdminLayout>
  );
}
