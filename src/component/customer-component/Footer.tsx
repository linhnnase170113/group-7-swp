import { Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react'
import { setup } from '@/config/setup';

export default function Footer() {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography>Hỗ trợ khách hàng</Typography>
                        <Typography><EmailIcon/>{setup.email}</Typography>
                        <Typography><PhoneIcon/>123 456789</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Sản phẩm</Typography>
                        <Typography>Tất cả sản phẩm</Typography>
                        <Typography>Sản phẩm nổi bật</Typography>
                        <Typography>Sản phẩm mới</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Thông tin liên hệ</Typography>
                        <Typography>Liên hệ</Typography>
                        <Typography>Về Hommie</Typography>
                        <Typography>Cửa hàng</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>TiemHommie</Typography>
                        <Typography>Decorations and Gifts</Typography>
                        <Typography>Theo dõi Hommie tại</Typography>
                        <Toolbar>
                        <Button>hello</Button><Button>hello</Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
