import CustomerLayout from "@/layout/CustomerLayout";
import { Paper, Typography, CardMedia, TextField, IconButton, Card, Button, Toolbar, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { CheckInView } from "@/checkInScreen";
import ChangeQuatityButton from "@/component/customer-component/cart/ChangeQuatityButton";
const cartItems = [{
    productName: "Chuong gio khung long xanh la",
    image: "/assets/images/5.jpg",
    quantity: 2,
    price: 15000,
    category: "Đồ trang trí"
}, {
    productName: "Chuong gio khung long xanh la",
    image: "/assets/images/1.jpg",
    quantity: 2,
    price: 15000,
    category: "Đồ trang trí"
},
{
    productName: "Chuong gio khung long xanh la",
    image: "/assets/images/1.jpg",
    quantity: 2,
    price: 15000,
    category: "Đồ trang trí"
},
{
    productName: "Chuong gio khung long xanh la",
    image: "/assets/images/1.jpg",
    quantity: 2,
    price: 15000,
    category: "Đồ trang trí"
}]
let total = 0
for (let i = 0; i < cartItems.length; i++) {
    total = total + (cartItems[i].price * cartItems[i].quantity)
}
export default function Cart() {
    return (
        <CustomerLayout>
            <div
                style={{
                    display: "flex",
                    marginBottom: "1rem",
                }}
            >
                <ShoppingCartOutlinedIcon sx={{
                    width: "2rem",
                    height: "2rem",
                    marginRight: "0.5rem",
                    marginLeft: "0.5rem"
                }} />
                <Typography variant="h5" sx={{
                    fontWeight: "600",
                }}>Giỏ hàng</Typography>
            </div>
            <Paper>
                {cartItems.map((row, key) => (
                    <div style={{
                        borderBottom: "1px solid gray",
                        padding: "1rem 4rem 1rem",
                        display: "grid",
                        gridTemplateColumns: "10rem 23rem 13rem 13rem auto"
                    }} key={key}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: "7rem",
                                height: "5rem",
                                paddingRight: "3rem"
                            }}
                            key={key}
                            src={row.image}
                        />
                        <div style={{
                            paddingRight: "3rem"
                        }}>
                            <Typography variant="h6">{row.productName}</Typography>
                            <Typography variant="subtitle1">{row.category}</Typography>
                        </div>
                        <div style={{
                            paddingRight: "3rem",
                            paddingTop: "1rem"
                        }}>
                            <ChangeQuatityButton quantity={row.quantity}/>
                        </div>
                        <div>
                            <Typography variant="h6">total: {row.price * row.quantity} VND</Typography>
                            <Typography variant="subtitle1">{row.quantity}x{row.price}</Typography>
                        </div>
                        <Button color="error" variant="contained">Xoá</Button>
                    </div>
                ))}
            </Paper>
            <CheckInView>
                <Card sx={{
                    marginTop: "2rem",
                    height: "4rem",
                    padding: "1rem 2rem 1rem",

                }}>
                    <Toolbar>
                    <div></div>
                    <Box sx={{flexGrow: 1}}/>
                    <Typography variant="h6">Tổng tiền thanh toán: <span style={{marginLeft: "1rem", marginRight: "5rem"}}>{total} VND</span></Typography>
                    <Button sx={{
                        height: "4rem"
                    }} color="success" variant="contained">Thanh toán</Button></Toolbar>
                </Card>
            </CheckInView>
        </CustomerLayout>
    )
}