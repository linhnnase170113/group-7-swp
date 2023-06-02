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
import { setup } from "../../config/setup";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { UserContext } from "../login/AuthContext";
import { useContext } from "react";
import SearchBox from "./navigation/SearchBox";
export default function UserNavigation({ categoryList }: any) {
  const { user, logout } = useContext(UserContext)
  const router = useRouter();
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
      <MenuItem onClick={() => {
        handleMenuClose()
        // logout()
      }}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          padding: "1rem",
          color: setup.color,
          "& .MuiButtonBase-root": {
            boxShadow: "none",
            margin: "0 1rem",
            padding: "0px",
            color: setup.color,
            fontWeight: "700",
            fontSize: "medium",
          },
          "& .MuiButtonBase-root:hover": {  
            backgroundColor: "inherit",
            border: "none"
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
                  },
                  paddingRight: "2rem",
                  fontFamily: 'Roboto Serif'
                }}
                onClick={() => {
                  router.push("/customer");
                }}
              >
                {setup.name}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: {
                    xs: "none", sm: "block", cursor: "pointer",
                    letterSpacing: '.1rem',
                    textAlign: "center",
                    fontFamily: 'Charm',
                    fontWeight: "550",
                  }
                }}
              >
                Decoration and Gift
              </Typography>
            </div>
            <SearchBox/>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItem.map((item, key) => (
                <Button key={key}>{item.name}</Button>
              ))}
              {user === null ? (
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                  sx={{
                    transform: "scale(1.2)"
                  }}
                >
                  Login
                </Button>
              ) : (
                <>
                  <IconButton className="navbar" color="inherit" sx={{
                      margin: "0 1rem",
                      transform: "scale(1.2)"
                    }}>
                    <Badge badgeContent={4} color="error">
                      <ShoppingBagIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    sx={{
                      margin: "0 1rem",
                      transform: "scale(1.3)"
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
              borderTop: "1px solid white",
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
                <Grid item xs={2.4} key={item.categoryId}>
                  <Button
                     fullWidth
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
