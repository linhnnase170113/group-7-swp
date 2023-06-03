import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { setup } from '@/config/setup'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useContext } from 'react';
import { UserContext } from '../login/AuthContext';
const settings = ['Profile', 'Logout'];
function AdminNavigationTop() {
  const { logout } = useContext(UserContext)
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"
      sx={{
        backgroundColor: "white",
        color: setup.color,
        boxShadow: "none",
        height: "80px",
        "& .MuiButtonBase-root": {
          boxShadow: "none",
          margin: "0 1rem",
          color: "black"
        },
        "& .MuiButtonBase-root:hover": {
          backgroundColor: "inherit",
        },
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open notification">
              <IconButton size='large' >
                <InfoOutlinedIcon sx={{
                  transform: "scale(1.3)",
                  color: "#0d6efd"
                }}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Open notification">
              <IconButton  size='large'>
                <NotificationsOutlinedIcon sx={{
                  transform: "scale(1.3)",
                  color: "#0d6efd"
                }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} size='large'>
                <AccountCircleOutlinedIcon sx={{
                  transform: "scale(1.3)",
                  color: "#0d6efd"
                }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => {
                  handleCloseUserMenu()
                  logout()
                }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminNavigationTop;