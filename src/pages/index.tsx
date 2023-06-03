import Loading from "@/component/Loading";
import { UserContext } from "@/component/login/AuthContext";
import { CardMedia, CircularProgress, Dialog } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
export default function Home() {
  return (
    <>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
      />
      <Loading/>
    </>
  );
}
