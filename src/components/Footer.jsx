import React from "react";
import mapaImg from "../images/mapa.png";
import logo from "../images/sorayaTo_logo7.png";

export default function Footer() {
  return (
    <div className="container-section4">
      <h2>CONTATO</h2>
      <div className="subcontainer-section4">
        <img src={logo} alt="logo" />
        <div className="contatos">
          <p>41 8902-4017</p>
          <p>email@teste.com.br</p>
        </div>
        <div className="mapa-container">
          <p>Rua Amaralina, 456, Pontal do Paraná - PR</p>
          <img className="mapa-img" src={mapaImg} alt="mapa do consultorio" />
        </div>
      </div>
    </div>
  );
}
