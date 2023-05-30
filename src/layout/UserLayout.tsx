import UserNavigation from "@/component/customer-component/Navigation";
import { setup } from "@/config/setup";
import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function UserLayout({ children } : any) {
  return (
    <div>
      <Head>
        <title>{setup.name}</title>
      </Head>
      <UserNavigation />
      <Container maxWidth="lg" sx={{
        marginTop: "11rem",
        marginBottom: "5rem",
          position: "relative"
      }}>{children}</Container>
      <img src="/assets/images/footer.png"/>
    </div>
  );
}
