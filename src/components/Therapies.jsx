import React from "react";
import logo2 from "../images/logo2.png";

export default function Therapies() {
  return (
    <div className="section2">
      <h2>Abordagens</h2>
      <div className="second-section2">
        <img
          className="foto-perfil"
          src={logo2}
          alt="foto profissional de Soraya"
        />
        <div className="about-me">
          <ul>
            <li>Motricidade (global e fina);</li>
            <li>
              Sensorial (tátil, vestibular, propriocetivo, auditivo, olfativo,
              visual, gustativo);
            </li>
            <li>Interação social;</li>
            <li>Perturbação do Espectro do Autismo;</li>
            <li>Perturbação do Desenvolvimento Intelectual;</li>
            <li>Perturbação de Défice de Atenção/Hiperatividade;</li>
            <li>Atraso Global do Desenvolvimento;</li>
            <li>Perturbação do Desenvolvimento da Coordenação;</li>
            <li>Disfunção de Integração Sensorial;</li>
            <li>Alterações genéticas (síndromes);</li>
            <li>Seletividade alimentar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
