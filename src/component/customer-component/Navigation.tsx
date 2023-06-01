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
import WidgetsIcon from '@mui/icons-material/Widgets';
export default function UserNavigation({ categoryList }: any) {
  const router = useRouter();
  const { handleSubmit, register } = useForm();
  const navItem = [
    { name: "about", url: "" },
    { name: "contact", url: "" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = (data: any) => {
    router.push(`/customer/search?productName=${data.searchValue}`);
  };
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
            <div>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display: {
                    xs: "none", sm: "block", cursor: "pointer",
                    letterSpacing: '.1rem',
                  }
                }}
                onClick={() => {
                  router.push("/customer");
                }}
              >
                {setup.name}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  display: {
                    xs: "none", sm: "block", cursor: "pointer",
                    letterSpacing: '.1rem',
                    textAlign: "center"
                  }
                }}
              >
                Decoration and Gift
              </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    border: "1px solid black",
                    borderRadius: "1rem",
                  },
                  width: "30rem"
                }}
                InputProps={{
                  startAdornment: <SearchIcon />,
                }}
                size="small"
                defaultValue=""
                {...register("searchValue", { required: true })}
              />
            </form>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItem.map((item, key) => (
                <Button key={key}>{item.name}</Button>
              ))}
              {true ? (
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                  sx={{
                    transform: "scale(1.5)"
                  }}
                >
                  Login
                </Button>
              ) : (
                <>
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
                </>
              )}
            </Box>
          </Toolbar>
          <div
            style={{
              height: "2rem",
              marginTop: "1rem",
              paddingTop: "0.5rem",
              borderTop: "1px solid gray",
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Button>
                  <WidgetsIcon sx={{
                    marginRight: "5px"
                  }} />Danh mục
                </Button>
              </Grid>
              {categoryList != null ? categoryList.map((item: any) => (
                <Grid item xs={2} key={item.categoryId}>
                  <Button
                    onClick={() => {
                      router.push(`/customer/search?categoryId=${item.categoryId}`);
                    }}
                  >
                    {item.categoryName}
                  </Button>
                </Grid>
              )) : null}
            </Grid>
          </div>
        </Container>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
