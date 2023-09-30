import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/sorayaTo_logo7.png";
import { pink } from "@mui/material/colors";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <img className="logo" src={logo} alt="logo" />
          <div className="menu-button">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon sx={{ color: "darkblue" }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                sx={{ backgroundColor: "darkblue", color: "white" }}
                onClick={handleClose}
              >
                Sobre
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "darkblue", color: "white" }}
                onClick={handleClose}
              >
                Estrutura
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "darkblue", color: "white" }}
                onClick={handleClose}
              >
                Contato
              </MenuItem>
            </Menu>
          </div>
          <div className="nav-btn">
            <Stack direction="row" spacing={2}>
              <Button sx={{ color: "darkBlue" }}>Sobre</Button>
              <Button sx={{ color: "darkBlue" }}>Estrutura</Button>
              <Button sx={{ color: "darkBlue" }}>Contato</Button>
            </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
