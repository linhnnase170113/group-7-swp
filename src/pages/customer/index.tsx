import { getCategoryListApi } from "@/api/CategoryApi";
import Banner from "@/component/customer-component/home/Banner";
import HomeCategoryList from "@/component/customer-component/home/HomeCategoryList";
import UserLayout from "@/layout/UserLayout";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [categoryList,setCategoryList] = useState<any>(null)
  useEffect(() => {
    const getCategoryList =async () => {
      setCategoryList(await getCategoryListApi())
      console.log(await getCategoryListApi())
    }
    getCategoryList()
  }, [])
  return (
    <>
      <UserLayout>
        <Banner />
        { categoryList != null ? categoryList.map((item:any) => (
          <HomeCategoryList title={item.categoryName} key={item.categoryId} />
        )) : null}
      </UserLayout>
    </>
  );
}
