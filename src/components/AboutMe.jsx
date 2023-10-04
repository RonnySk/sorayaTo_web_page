import React from "react";
import sorayaPerfilImg from "../images/soraya_perfil.png.jpg";

export default function AboutMe() {
  return (
    <div id="sobremim" className="section2">
      <h2>Sobre mim</h2>
      <div className="second-section2">
        <img
          className="foto-perfil"
          src={sorayaPerfilImg}
          alt="foto profissional de Soraya"
        />
        <div className="about-me">
          <h3>Soraya Leone de Moraes</h3>
          <p>
            Formada em 1995 pela Universidade Tuiuti do Paraná com Pós
            graduações em “Saúde Mental em Dependência Química” e “Gestão em
            Saúde Pública”. <br></br>Sou uma profissional que ama estudar e com
            sede em novos conhecimentos e nos últimos anos tenho me
            especializado na área de Transtorno do Espectro Autista (TEA).{" "}
            <br></br>A minha última especialização foi “Intervenção de Terapia
            Ocupacional aplicada a criança e adolescente com TEA”, atualmente
            participo de muitos cursos na área como “Estratégias da Analise do
            Comportamento Aplicada para pessoas com TEA”, “Treinamento de
            intervenção Baseada no modelo Denver de intervenção precoce para
            crianças com TEA”, “Integração sensorial no TEA” e “Intervenção e
            inclusão no TEA” para assim oferecer o melhor atendimento, sempre
            com muita responsabilidade, carinho e amor.
          </p>
        </div>
      </div>
      <div className="experienciaProfissional">
        <h3>Experiência Profissional</h3>
        <ul>
          <li>
            1995-2005 | Centro Regional de atendimento integrado ao Deficiente
            (CRAID) - Atendimento com crianças e adolescentes com necessidades
            especiais em geral.
          </li>
          <li>
            2005-2007 | Hospital Erasto Gaertner - Atendimento com crianças e
            adolescentes com doenças neurológicas.
          </li>
          <li>
            2005-2022 | Hospital Psiquiátrico Adauto Botelho - Coordenadora das
            unidades e criadora das Oficinas de Terapia Ocupacional.
          </li>
          <li>
            2022-2023 | Prefeitura de Pontal do Paraná - Ambulatório Municipal
            de Especialidades para crianças.
          </li>
          <li>
            2023 - atual | Centro de Excelência de Reabilitação Neurológica em
            São José dos Pinhais - Atendimento de crianças com TEA, TDAH e TOD.
          </li>
          <li>
            2023 - atual | Consultório Privado em Bal. Shangrila - Pontal do
            Paraná.
          </li>
        </ul>
      </div>
    </div>
  );
}
