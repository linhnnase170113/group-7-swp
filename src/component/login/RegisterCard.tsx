import { Typography, OutlinedInput } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
export default function RegisterCard() {
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
          marginBottom: "1rem"
        }}
        onChange={(e) => {}}
      />
    </>
  );
}
