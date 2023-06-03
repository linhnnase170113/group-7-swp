import NavigationLeft from "@/component/admin-component/NavigationLeft";
import AdminNavigationTop from "@/component/admin-component/NavigationTop";
import { setup } from "@/config/setup";
import { Grid, Container } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function AdminLayout({ children }: any) {
  return (
    <div>
      <Head>
        <title>{setup.name}</title>
      </Head>
      <Grid container spacing={0}>
        <Grid item xs={1.7}>
          <NavigationLeft />
        </Grid>
        <Grid item xs={10.3}>
          <AdminNavigationTop />
          <Container
            maxWidth="xl"
            sx={{
              marginTop: "1rem",
            }}
          >
            {children}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
