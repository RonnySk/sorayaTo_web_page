import React from "react";
import logo2 from "../images/sorayaTo_logo_fundo_azul.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  return (
    <div className="container-footer">
      <h2>Contato</h2>
      <img src={logo2} alt="logo" />
      <div className="contatos">
        <div className="telefon">
          <WhatsAppIcon />
          <p>41 8902-4017</p>
          <MailOutlineIcon sx={{ ml: 2 }} />
          <p>email@teste.com.br</p>
        </div>
      </div>
      <div className="adress">
        <FmdGoodIcon sx={{ ml: 2 }} />
        <div className="adress-p">
          <p>Rua Amaralina, 456, Bal. Shangrila</p>
          <p>Pontal do Paraná - PR</p>
        </div>
      </div>
    </div>
  );
}
