import { Typography, OutlinedInput, Button } from '@mui/material';
import router from 'next/router';
import React, { useContext, useEffect } from 'react'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AddHomeIcon from '@mui/icons-material/AddHome';
import { setup } from "@/config/setup";
import { UserContext } from './AuthContext';
import { useForm } from 'react-hook-form';
const button = "back to home"
export default function InforCard() {
  const { handleSubmit, register } = useForm();
  const { createUser, logout } = useContext(UserContext)
  const onSubmit = (data: any) => createUser(data.address, data.userName, data.phoneNumber)
  // const onSubmit = (data: any) =>console.log(data)
  useEffect(() => {
  }, [])
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <OutlinedInput
        placeholder="Tên người dùng"
        endAdornment={<PersonIcon />}
        className="input-login"
        {...register("userName", { required: true })}
      />
      <OutlinedInput
        placeholder="Số điện thoại"
        endAdornment={<LocalPhoneIcon />}
        sx={{
          marginTop: "0.5rem",
          width: "100%",
          marginBottom: "0.5rem",
        }}
        {...register("phoneNumber", { required: true })}
      />
      <OutlinedInput
        placeholder="Địa chỉ"
        sx={{
          // marginTop: "0.5rem",
          width: "100%",
          marginBottom: "1rem",
        }}
        endAdornment={<AddHomeIcon />}
        className="input-login"
        {...register("address", { required: true })}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "black",
            padding: "6px 8px",
            cursor: "pointer"
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          {button.toUpperCase()}
        </Typography>
        <div>
        <Button
        type="submit"
              variant="contained"
              sx={{
                backgroundColor: setup.navigationColor,
                color: "black"
              }}
            >
              Submit
            </Button>
        </div>
      </div>
      </form>
    </>
  )
}
