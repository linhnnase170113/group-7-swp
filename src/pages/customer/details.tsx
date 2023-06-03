import { getProductByProductIdApi } from "@/api/ProductApi";
import Loading from "@/component/Loading";
import DetailsCard from "@/component/customer-component/Details/DetailsCard";
import { useAppDispatch } from "@/feature/Hooks";
import UserLayout from "@/layout/CustomerLayout";
import { Paper, CardMedia, Grid, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function Details() {
  const router = useRouter()
  const { productId } = router.query as any
  const [product, setProduct] = useState<any>(null)
    useEffect(() => {
    const getProduct = async () => {
      const product = await getProductByProductIdApi(productId)
      setProduct(product)
    }
    getProduct()
  }, [])
  return (
    <UserLayout>
      {product !== null ? (<DetailsCard product={product}/>) : (<Loading/>)}
    </UserLayout>
  );
}
