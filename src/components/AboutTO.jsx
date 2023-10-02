import React from "react";
import sorayaPerfilImg from "../images/soraya_perfil.png.jpg";
import puzzle from "../images/puzzle.png";

export default function AboutTO() {
  return (
    <div className="container-aboutTo">
      <h2> O que é Terapia Ocupacional?</h2>
      <div className="second-section2">
        <img
          className="foto-puzzle"
          src={puzzle}
          alt="foto duas criancas com um puzzle"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}
