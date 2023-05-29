import Banner from "@/component/user-component/home/Banner";
import HomeCategoryList from "@/component/user-component/home/HomeCategoryList";
import { category } from "@/config/setup";
import UserLayout from "@/layout/UserLayout";
import React from "react";

export default function Index() {

  return (
    <>
      <UserLayout>
      <Banner />
      {category.map((item, key) => (
        <HomeCategoryList title={item.name} key={key}/>
      ))}
      </UserLayout>
    </>
  );
}
