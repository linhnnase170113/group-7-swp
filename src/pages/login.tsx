import { setup } from "@/config/setup";
import {
  CardMedia,
  DialogTitle,
  Dialog,
  DialogContent,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LoginCard from "@/component/login/LoginCard";
import RegisterCard from "@/component/login/RegisterCard";
import Head from "next/head";
import { useRouter } from "next/router";
export default function Login() {
  const [sign, setSign] = useState(false);
  const handleLogin = () => {};
  const handleRegister = () => {};
  const router = useRouter()
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
          {sign === false ? (
            <LoginCard/>
          ) : (
            <RegisterCard/>
          )}
          {"" === "" ? null : <Typography color="red">{""}</Typography>}
          <Button
            variant="contained"
            style={{ backgroundColor: "#F5A524" }}
            onClick={() => {}}
            fullWidth
          >
            <GoogleIcon style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
            Login with google
          </Button>
        </DialogContent>
        <DialogTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={() => {
              router.push("/")
            }}>
              back to home
            </Button>
            <div>
            {sign === false ? (
              <>
                <Button
                  onClick={() => {
                    setSign(true);
                  }}
                >
                  Register
                </Button>
                <Button
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    color: setup.navigationColor,
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    setSign(false);
                  }}
                >
                  Login
                </Button>
                <Button variant="contained" onClick={handleRegister} sx={{
                  color: setup.navigationColor
                }}>
                  Register
                </Button>
              </>
            )}
            </div>
          </div>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
