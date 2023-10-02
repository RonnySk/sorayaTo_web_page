import React from "react";
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
          A Terapia Ocupacional visa promover a participação dos pacientes de
          forma autónoma e independente em todas as áreas de ocupação
          (atividades da vida diária, escola, sono, participação social, lazer…)
        </p>
        <p>
          A intervenção do Terapeuta Ocupacional passa pelo desenvolvimento de
          competências em défice (cognitivas, motoras, emocionais, sociais ou
          sensoriais), ou pela adaptação do ambiente.
        </p>
        <p>
          O brincar é o principal meio de intervenção do Terapeuta Ocupacional
          pediátrico, sendo este facilitador e motivador para o alcance dos
          objetivos terapêuticos.
        </p>
      </div>
    </div>
  );
}
