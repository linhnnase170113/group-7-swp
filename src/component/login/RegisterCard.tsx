import { Typography, OutlinedInput, Button, TextField, InputAdornment } from "@mui/material";
import React, { useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UserContext } from "./AuthContext";
import { useAppDispatch } from "@/feature/Hooks";
import { setOpen } from "@/feature/Alert";
export default function RegisterCard({ setSign }: any) {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const dispatch = useAppDispatch()
  const { registerFirebase } = useContext(UserContext)
  const router = useRouter();
  const onSubmit = (data : any) => {
    const error = registerFirebase(data.email, data.password)
    error !== undefined ? dispatch(
      setOpen({
        open: true,
        message: "Register success",
        severity: "success",
      })
    ) : null
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Đăng kí</Typography>
      <TextField
        placeholder="Email"
        error= {errors.email !== undefined}
        helperText={ errors.email !== undefined ? "bắt buộc" : ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        {...register("email", {
          required: true
        })}
        className="input-login"
      />
      <TextField
        placeholder="Password"
        error= {errors.password !== undefined}
        helperText={ errors.password !== undefined ? "bắt buộc ít nhất 6 kí tự" : ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockPersonIcon />
            </InputAdornment>
          ),
        }}
        {...register("password", {
          required: true,
          minLength: 6
        })}
        className="input-login"
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
            type="submit"
          >
            Đăng kí
          </Button>
        </div>
      </div>
      </form>
  );
}
