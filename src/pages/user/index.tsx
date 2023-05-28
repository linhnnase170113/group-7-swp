import Banner from "@/component/user-component/home/Banner";
import HomeCategoryList from "@/component/user-component/home/HomeCategoryList";
import UserLayout from "@/layout/UserLayout";
import React from "react";

export default function Index() {
  const category = [
    { name: "đi chơi", url: ""},
    { name: "đồ nhồi bông", url: ""},
    { name: "trang sức", url: ""},
    { name: "đồ trang trí", url: ""},
  ]
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
