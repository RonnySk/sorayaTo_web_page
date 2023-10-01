import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import section1Img from "../images/consultorio_sorayTo.png";
import { Image } from "mui-image";

export default function Section1() {
  return (
    <div className="container-section1">
      <img
        className="consultorioImg-section1"
        src={section1Img}
        alt="imagem do consultorio"
      />
      {/* <Image src={section1Img} /> */}
      {/* <Box
        component="img"
        sx={{
          width: "100%",
        }}
        src={section1Img}
        alt="img from the clinic"
        maxHeight="40%"
        position="absolute"
      ></Box> */}
      {/* <Typography variant="h1" top={50} textAlign="center" color="black">
        Texto
      </Typography>
      <Typography top={50} textAlign="center" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Typography> */}
      <div className="texto-section1">
        <h2>Terapia Ocupacional</h2>
        <p>Reconstruindo vidas, um passo de cada vez!</p>
      </div>
    </div>
  );
}
