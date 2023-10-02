import React from "react";
import section1Img from "../images/consultorio_sorayTo.png";

export default function Section1() {
  return (
    <div className="container-section1">
      <img
        className="consultorioImg-section1"
        src={section1Img}
        alt="imagem do consultorio"
      />
      <div className="texto-section1">
        <h2>Terapia Ocupacional</h2>
        <p>Reconstruindo vidas, um passo de cada vez!</p>
      </div>
    </div>
  );
}
