import { Checkbox, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockPersonIcon from "@mui/icons-material/LockPerson";
export default function LoginCard() {
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
      
    </>
  );
}
