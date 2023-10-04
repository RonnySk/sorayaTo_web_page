import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/sorayaTo_logo_fundo_azul_pequena.png";

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
    <Box flexGrow={1}>
      <AppBar sx={{ backgroundColor: "#6aa9e9" }} position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="logo" />
          <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
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
                sx={{ backgroundColor: "#6aa9e9" }}
                onClick={handleClose}
              >
                <Link href="#sobremim" underline="none" color="white">
                  Sobre mim
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#6aa9e9" }}
                onClick={handleClose}
              >
                <Link href="#terapiaOcupacional" underline="none" color="white">
                  Terapia Ocupacional
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#6aa9e9" }}
                onClick={handleClose}
              >
                <Link href="#atendimento" underline="none" color="white">
                  Áreas de Atendimento
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#6aa9e9" }}
                onClick={handleClose}
              >
                <Link href="#espaco" underline="none" color="white">
                  Espaço
                </Link>
              </MenuItem>
              <MenuItem
                sx={{ backgroundColor: "#6aa9e9" }}
                onClick={handleClose}
              >
                <Link href="#contato" underline="none" color="white">
                  Contato
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
            <Stack direction="row" spacing={2}>
              <Link
                href="#sobremim"
                underline="none"
                color="white"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#318CE7",
                    borderRadius: 2,
                  },
                }}
              >
                SOBRE MIM
              </Link>

              <Link
                href="#terapiaOcupacional"
                underline="none"
                color="white"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#318CE7",
                    borderRadius: 2,
                  },
                }}
              >
                TERAPIA OCUPACIONAL
              </Link>

              <Link
                href="#atendimento"
                underline="none"
                color="white"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#318CE7",
                    borderRadius: 2,
                  },
                }}
              >
                ÁREAS DE ATENDIMENTO
              </Link>

              <Link
                href="#espaco"
                underline="none"
                color="white"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#318CE7",
                    borderRadius: 2,
                  },
                }}
              >
                ESPAÇO
              </Link>

              <Link
                href="#contato"
                underline="none"
                color="white"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#318CE7",
                    borderRadius: 2,
                  },
                }}
              >
                CONTATO
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
