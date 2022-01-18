import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SideDrawer from "../SideDrawer";
import { useDispatch } from "react-redux";
import { openSideDrawer } from "../../redux/slices/uiSlice";

const navMenu = [
  { display: "Home", url: "/" },
  { display: "Ships", url: "/ships" },
  { display: "Equipments", url: "/equipments" },
];

const userMenu = [
  { display: "Profile", url: "/profile" },
  { display: "Settings", url: "/settings" },
  { display: "Logout", url: "/logout" },
];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ maxWidth: "xl" }}>
      <SideDrawer />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            CRUD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={() => dispatch(openSideDrawer())}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            CRUD
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navMenu.map((item) => (
              <Button
                key={item.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  component={RouterLink}
                  to={item.url}
                  underline="none"
                  color="inherit"
                >
                  {item.display}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open User Menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>K</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenu.map((item) => (
                <MenuItem key={item.url} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      component={RouterLink}
                      to={item.url}
                      underline="none"
                      color="inherit"
                    >
                      {item.display}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
