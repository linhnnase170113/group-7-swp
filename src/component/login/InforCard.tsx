import { Typography, OutlinedInput, Button, Grid, Select, MenuItem } from '@mui/material';
import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AddHomeIcon from '@mui/icons-material/AddHome';
import { setup } from "@/config/setup";
import { UserContext } from './AuthContext';
import { useForm } from 'react-hook-form';
import Loading from '../Loading'
const button = "back to home"


export default function InforCard() {
  const [ city, setCity ] = useState<any>(null)
  const [ cityOption, setCityOption] = useState<any>(null)
  const [ district, setDistrict] = useState<any>(null)
  const [ districtOption, setDistrictOption] = useState<any>(null)
  const [ ward, setWard ] = useState<any>(null)
  const [ wardOption, setWardOption] = useState<any>(null)

  const { handleSubmit, register } = useForm();
  const { createUser } = useContext(UserContext)
  const onSubmit = (data: any) => createUser(`${data.address}, ${ward.name}, ${district.name}, ${city.name}`, data.userName, data.phoneNumber)
  // const onSubmit = (data : any) => console.log(`${data.address}, ${ward.name}, ${district.name}, ${city.name}`)
  useEffect(() => {
    const getCityOption = async() => {
      const response = await fetch("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1")
      const cities = await response.json()
      setCityOption(cities.data.data)
    }
    const getDistrictOption = async(code : any) => {
      const response = await fetch(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`)
      const districts = await response.json()
      setDistrictOption(districts.data.data)
    }
    console.log(cityOption)
    cityOption === null ? getCityOption() : null;
    city !== null ? getDistrictOption(city.code) : null;

  }, [city])
  useEffect(() => {
    const getWardOption = async(code : any) => {
      const response = await fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`)
      const wards = await response.json()
      setWardOption(wards.data.data)
    }
    district !== null ? getWardOption(district.code) : null;
  }, [district])
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="name">* Tên khách hàng</label>
      <OutlinedInput
        size='small'
        endAdornment={<PersonIcon />}
        className="input-login name"
        {...register("userName", { required: true })}
      />
      <label htmlFor="phone">* Số điện thoại</label>
      <OutlinedInput
        size='small'
        className="phone"
        endAdornment={<LocalPhoneIcon />}
        sx={{
          marginTop: "0.5rem",
          width: "100%",
          marginBottom: "0.5rem",
        }}
        {...register("phoneNumber", { required: true })}
      />
      <Grid container spacing={2} sx={{
        marginBottom: "0.5rem"
      }}>
        <Grid item xs={6}>* Tỉnh / Thành phố
        {
          cityOption !== null && cityOption !== undefined ? (
            <Select
          fullWidth
          value={city}
          size="small"
          onChange={(event) => {
            setCity(event.target.value)
          }}
        >
          <MenuItem  key={-1} value={undefined}></MenuItem>
          {cityOption.map((city : any, key : any) => (
            <MenuItem  key={key} value={city}>{city.name}</MenuItem>
          ))}
        </Select>
          ) : <Select fullWidth disabled={true} size="small"/>
        }
         </Grid>
        <Grid item xs={6}>* Quận / Huyện 
        {
          districtOption !== null && districtOption !== undefined ? (
            <Select
          fullWidth
          value={district}
          size="small"
          onChange={(event) => {
            console.log(event.target)
            setDistrict(event.target.value)
          }}
        >
          <MenuItem  key={-1} value={undefined}></MenuItem>
          {districtOption.map((district : any, key: any) => (
            <MenuItem  key={key} value={district}>{district.name}</MenuItem>
          ))}
        </Select>
          ) : <Select fullWidth disabled={true} size="small"/>
        }</Grid>
        <Grid item xs={6}>* Phường / Xã 
        {
          wardOption !== null ? (
            <Select
          fullWidth
          value={ward}
          size="small"
          onChange={(event) => {
            setWard(event.target.value)
          }}
        >
          <MenuItem  key={-1} value={undefined}></MenuItem>
          {wardOption.map((ward : any, key : any) => (
            <MenuItem  key={key} value={ward}>{ward.name}</MenuItem>
          ))}
        </Select>
          ) : <Select fullWidth disabled={true} size="small"/>
        }</Grid>
      </Grid>
      <label htmlFor="address">* Số nhà tên đường</label>
      <OutlinedInput
        placeholder="Địa chỉ"
        size="small"
        sx={{
          width: "100%",
          marginBottom: "1rem",
        }}
        endAdornment={<AddHomeIcon />}
        className="input-login address"
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
