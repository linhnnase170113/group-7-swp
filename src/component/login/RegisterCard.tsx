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
      <Typography variant="h5">Register</Typography>
      <OutlinedInput
        placeholder="Name"
        endAdornment={<PersonIcon />}
        className="input-login"
        onChange={(e) => {}}
      />
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
      <OutlinedInput
        placeholder="Phone"
        endAdornment={<LocalPhoneIcon />}
        sx={{
          marginTop: "0.5rem",
          width: "100%",
          marginBottom: "1rem",
        }}
        onChange={(e) => {}}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#F5A524" }}
        onClick={() => {}}
        fullWidth
      >
        <GoogleIcon style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
        Login with google
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
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
              setSign(false);
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              color: setup.navigationColor,
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
