import React from "react";
import mapaImg from "../images/mapa.png";
import logo from "../images/sorayaTo_logo7.png";

export default function Footer() {
  return (
    <div className="container-footer">
      <h2>Contato</h2>
      <div className="subcontainer-section4">
        <img src={logo} alt="logo" />
        <div className="contatos">
          <p>41 8902-4017</p>
          <p>email@teste.com.br</p>
        </div>
        <p>Rua Amaralina, 456, Pontal do Paraná - PR</p>
      </div>
    </div>
  );
}
