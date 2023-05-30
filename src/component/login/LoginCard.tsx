import {
  Button,
  Checkbox,
  DialogContent,
  DialogTitle,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import GoogleIcon from "@mui/icons-material/Google";
import { setup } from "@/config/setup";
import { useRouter } from "next/router";

export default function LoginCard({ setSign }: any) {
  const router = useRouter();
  return (
    <>
      <OutlinedInput
        className="input-login"
        startAdornment={
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        }
        onChange={(e) => {}}
      />
      <br />
      <OutlinedInput
        className="input-login"
        startAdornment={
          <InputAdornment position="start">
            <LockPersonIcon />
          </InputAdornment>
        }
        type="password"
        onChange={(e) => {}}
      />
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox />
          <Typography>Remember me</Typography>
        </div>
        <Typography>Forgot password</Typography>
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#F5A524" }}
        onClick={() => {}}
        fullWidth
      >
        <GoogleIcon style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
        Login with google
      </Button>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
          <Button
            onClick={() => {
              router.push("/");
            }}
          >
            back to home
          </Button>
          <div>
            <Button
              onClick={() => {
                setSign(true);
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              sx={{
                color: setup.navigationColor,
              }}
            >
              Login
            </Button>
          </div>
        </div>
    </>
  );
}
