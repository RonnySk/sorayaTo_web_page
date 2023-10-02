import React from "react";
import consultorio_interno1 from "../images/consultorio_interno1.png";
import consultorio_interno2 from "../images/consultorio_interno2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Section3() {
  return (
    <div className="section3">
      <h2>Espaço</h2>
      <img src={consultorio_interno1} alt="imagem interna do consultorio" />
      <img
        src={consultorio_interno2}
        alt="imagem interna do consultorio dois"
      />

      {/* <div className="carouselImg">
        <Carousel width={600}>
          <div>
            <img
              className="img-carousel"
              src={consultorio_interno1}
              alt="primeira imagem interna do consultorio"
            />
          </div>
          <div>
            <img
              className="img-carousel"
              src={consultorio_interno2}
              alt="segunda imagem interna do consultorio"
            />
          </div>
        </Carousel>
      </div> */}
    </div>
  );
}
