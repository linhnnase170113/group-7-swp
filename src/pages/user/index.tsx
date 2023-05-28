import Banner from "@/component/user-component/home/Banner";
import HomeCategoryList from "@/component/user-component/home/HomeCategoryList";
import UserLayout from "@/layout/UserLayout";
import React from "react";

export default function Index() {
  return (
    <>
      <UserLayout>
      <Banner />
      <HomeCategoryList title="hello"/>
      </UserLayout>
    </>
  );
}
