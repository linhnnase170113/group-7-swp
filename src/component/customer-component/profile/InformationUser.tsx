import {
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddNewAddress from "./AddNewAddress";
import { deleteAddressApi, getAddressByUserUidApi } from "@/pages/api/AddressApi";
import { useAppDispatch, useAppSelector } from "@/feature/Hooks";
import { setOpen } from "@/feature/Alert";
export default function InformationUser({ user, userBackend }: any) {
  const [userAddressList, setUserAddressList] = useState<any>([]);
  const dispatch = useAppDispatch()
  const  alert  = useAppSelector(state => state.alert)
  useEffect(() => {
    const getAddress = async () => {
      const addressList = await getAddressByUserUidApi();
      setUserAddressList(addressList);
    };
    getAddress();
  }, [user, alert]);
  const handleDeleteAddress =async (addressId : any) => {
      const response = await deleteAddressApi(addressId)
      if (response) {
        dispatch(
          setOpen({
            open: true,
            message: "Delete success",
            severity: "success",
          })
        );
      } else {
        dispatch(
          setOpen({
            open: true,
            message: "Delete fail",
            severity: "error",
          })
        );
      }
  }
  return (
    <>
      {user !== null && userBackend !== null ? (
        <Paper
          sx={{
            padding: "1rem",
          }}
        >
          <div
            style={{
              margin: "1rem",
              display: "flex",
              marginBottom: "2rem",
            }}
          >
            <Avatar
              alt=""
              src=""
              sx={{
                marginRight: "2rem",
                width: 105,
                height: 105,
              }}
            />
            <div>
              <Typography
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Name: {userBackend.userName}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Email: {user.email}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Phone: {userBackend.phoneNumber}
              </Typography>
            </div>
          </div>
          <AddNewAddress />
          <div
            style={{
              margin: "1rem",
              marginTop: "3rem",
            }}
          >
            {userAddressList.map((userAddress: any, key: any) => (
              <TextField
                key={key}
                defaultValue={userAddress.address}
                fullWidth
                label={`Address ${key + 1}`}
                disabled
                sx={{
                  marginBottom: "1rem",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={() => handleDeleteAddress(userAddress.addressId)}>
                      <ClearIcon
                        color="error"
                        sx={{
                          cursor: "pointer",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </div>
        </Paper>
      ) : null}
    </>
  );
}
