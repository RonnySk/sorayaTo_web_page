import React from "react";
import consultorio_interno1 from "../images/consultorio_interno1.png";
import consultorio_interno2 from "../images/consultorio_interno2.png";

export default function ImgGalery() {
  return (
    <div id="espaco" className="container-galery">
      <h2>Espaço</h2>
      <div className="subcontainer-galery">
        <img src={consultorio_interno1} alt="imagem interna do consultorio" />
        <img
          src={consultorio_interno2}
          alt="imagem interna do consultorio dois"
        />
      </div>
    </div>
  );
}
