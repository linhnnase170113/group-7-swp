import { setup } from "@/config/setup";
import {
  CardMedia,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LoginCard from "@/component/login/LoginCard";
import RegisterCard from "@/component/login/RegisterCard";
import Head from "next/head";
export default function Login() {
  const [sign, setSign] = useState(false);

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
        style={{
          height: "100vh",
          position: "absolute",
        }}
      />
      <Dialog open={true} maxWidth="xs" fullWidth>
        <DialogTitle>Welcome to {setup.name}</DialogTitle>
        <DialogContent>
          {sign === false ? <LoginCard setSign={setSign} /> : <RegisterCard setSign={setSign} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
