import React from "react";
import logo2 from "../images/logo2.png";

export default function Therapies() {
  return (
    <div id="atendimento" className="container-therapies">
      <h2>Áreas de Atendimento</h2>
      <div className="subcontainer-therapies">
        <img className="logo2" src={logo2} alt="foto profissional de Soraya" />
        <div className="therapies">
          <ul>
            <li>Motricidade (Global e Fina)</li>
            <li>Interação social</li>
            <li>Transtorno do Espectro Autista</li>
            <li>Atraso Cognitivo</li>
            <li>Transtorno de Défict de Atenção/Hiperatividade</li>
            <li>Treino de atividades de vida diária</li>
          </ul>
          <ul>
            <li>Atraso Global do Desenvolvimento</li>
            <li>Atraso no desenvolvimento das Habilidades Motoras</li>
            <li>Disfunção de Integração Sensorial</li>
            <li>Alterações genéticas (Síndromes)</li>
            <li>Seletividade alimentar</li>
            <li>Avaliação em Bebê de risco</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
