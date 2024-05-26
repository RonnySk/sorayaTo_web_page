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
            Formada pela Universidade Tuiuti do Paraná em 1995, possuo
            pós-graduações em “Terapia da mão”, "Saúde Mental em Dependência
            Química" e "Gestão em Saúde Pública". Sou uma profissional
            apaixonada por estudar e sempre em busca de novos conhecimentos. Nos
            últimos anos, tenho me especializado na área de Transtorno do
            Espectro Autista (TEA) e no método ABA (Análise do Comportamento
            Aplicada).
          </p>
          <p>
            Meu objetivo é prestar atendimentos individualizados com excelência,
            valorizando a interdisciplinaridade e juntamente com as famílias,
            favorecer o desenvolvimento humano e a inclusão social.
          </p>
          <p>
            Busco promover uma reabilitação acessível à população e oferecer um
            serviço de excelência com práticas baseadas em evidências
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
            2003-2005 | Hospital Erasto Gaertner - Atendimento com crianças e
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
