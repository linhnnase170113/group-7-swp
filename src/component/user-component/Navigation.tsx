import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { setup } from "../../config/setup";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { randomInt } from "crypto";

export default function UserNavigation() {
  const router = useRouter()
  const { handleSubmit, register} = useForm()
  const navItem = [
    { name: "plant", url: "" },
    { name: "about", url: "" },
    { name: "contact", url: "" },
  ];
  const category = [
    { name: "đi chơi", url: "" },
    { name: "đồ nhồi bông", url: "" },
    { name: "trang sức", url: "" },
    { name: "đồ trang trí", url: "" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (data:any) => {
    router.push(`/user/search?name=${data.searchValue}`)
  }
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          padding: "1rem",
          backgroundColor: setup.navigationColor,
          color: setup.color,
          "& .MuiButtonBase-root": {
            boxShadow: "none",
            margin: "0 1rem",
            color: setup.color,
          },
          "& .MuiButtonBase-root:hover": {
            backgroundColor: "inherit",
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Button>
              <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
                onClick={() => {
                  router.push("/user")
                }}
              >
                {setup.name}
              </Typography>
            </Button>
            <form onSubmit={
              handleSubmit(onSubmit)
            }>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    border: "1px solid black",
                    borderRadius: "1rem",
                  },
                }}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
                size="small"
                {...register("searchValue", {required: true})}
              />
            </form>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItem.map((item, key) => (
                <Button key={key}>{item.name}</Button>
              ))}
              <IconButton className="navbar" color="inherit">
                <Badge badgeContent={4} color="error">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
              <IconButton
                sx={{
                  margin: "0 1rem",
                }}
                className="navbar"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
          <div
            style={{
              height: "2rem",
              marginTop: "1rem",
              paddingTop: "0.5rem",
              borderTop: "0.1px solid black",
            }}
          >
            <Grid container spacing={0}>
              {category.map((item, key) => (
                <Grid item xs={3} key={key}>
                  <Button fullWidth onClick={() => {
                    router.push(`/user/search?categoryID=${key}`)
                  }}>{item.name}</Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
