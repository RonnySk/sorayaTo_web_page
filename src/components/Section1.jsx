import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import section1Img from "../images/consultorio_sorayTo.png";

export default function Section1() {
  return (
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        src={section1Img}
        alt="img from the clinic"
        maxHeight="40%"
        position="absolute"
      ></Box>
      <Typography
        variant="h1"
        position="relative"
        top={50}
        textAlign="center"
        color="white"
      >
        Texto
      </Typography>
      <Typography position="relative" top={50} textAlign="center" color="white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Typography>
    </div>
  );
}
