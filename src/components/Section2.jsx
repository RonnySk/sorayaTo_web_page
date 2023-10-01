import { Box, Typography } from "@mui/material";
import React from "react";
import sorayaPerfilImg from "../images/soraya_perfil.png.jpg";

export default function Section2() {
  return (
    <div className="section2">
      <h2> SOBRE MIM</h2>
      <div className="second-section2">
        <img
          className="foto-perfil"
          src={sorayaPerfilImg}
          alt="foto profissional de Soraya"
        />
        <div className="about-me">
          <h3>Soraya Leone</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}
