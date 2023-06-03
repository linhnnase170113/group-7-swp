import { Typography, OutlinedInput, Button } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";
import { setup } from "@/config/setup";
export default function RegisterCard({ setSign }: any) {
  const router = useRouter();
  return (
    <>
      <Typography variant="h5">Đăng kí</Typography>
      <OutlinedInput
        placeholder="Email"
        endAdornment={<EmailIcon />}
        className="input-login"
        onChange={(e) => {}}
      />
      <OutlinedInput
        placeholder="Password"
        endAdornment={<LockPersonIcon />}
        className="input-login"
        onChange={(e) => {}}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#F5A524", marginTop: ".8rem" }}
        onClick={() => {}}
        fullWidth
        className="login-button"
      >
        <GoogleIcon style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
        Đăng nhập bằng google
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        <Button
          sx={{
            color: "black"
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          quay về
        </Button>
        <div>
          <Button
          sx={{
            color: "black"
          }}
            onClick={() => {
              setSign(false);
            }}
          >
            Đăng nhập
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "black"
            }}
          >
            Đăng kí
          </Button>
        </div>
      </div>
    </>
  );
}
