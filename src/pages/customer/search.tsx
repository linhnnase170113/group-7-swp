import UserLayout from '@/layout/UserLayout'
import React, { useEffect } from 'react'
import { Typography, Grid } from "@mui/material"
import { useRouter } from 'next/router'
import Filter from '@/component/customer-component/search/Filter';
import SearchList from '@/component/customer-component/search/SearchList';

export default function Search() {
    const router = useRouter();
    const { name, categoryID } = router.query
  return (
    <UserLayout>
        <Grid container spacing={2}>
            <Grid item xs={3}><Filter/></Grid>
            <Grid item xs={9}><SearchList name={name}/></Grid>
        </Grid>
    </UserLayout>
  )
}
