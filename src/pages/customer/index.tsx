import { getCategoryAndProductApi } from "@/api/CategoryApi";
import Banner from "@/component/customer-component/home/Banner";
import HomeCategoryList from "@/component/customer-component/home/HomeCategoryList";
import UserLayout from "@/layout/CustomerLayout";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [categoryAndProduct,setCategoryAndProduct] = useState<any>(null)
  useEffect(() => {
    const getCategoryList =async () => {
      setCategoryAndProduct(await getCategoryAndProductApi())
    }
    getCategoryList()
  }, [])
  return (
    <>
      <UserLayout>
        <Banner />
        { categoryAndProduct != null ? categoryAndProduct.map((item:any) => (
          <HomeCategoryList categoryAndProduct={item} key={item.categoryId} />
        )) : null}
      </UserLayout>
    </>
  );
}
