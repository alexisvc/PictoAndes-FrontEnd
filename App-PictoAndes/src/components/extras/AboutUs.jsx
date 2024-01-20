import React, { useState } from "react";
import { FaArrowCircleLeft, FaHome, FaQuestion } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
          <span>Atrás</span>
        </button>
      </div>
      <div className="about-content">
        <div className="about-column">
          <img src="src\assets\logos\epn2.png" alt="Descripción de la imagen 1" />
          <h1>Escuela Politécnica Nacional </h1>
          <p>
            En la actualidad, las personas con
            discapacidades físicas o intelectuales enfrentan diversas
            dificultades en su vida diaria, desde problemas de movilidad hasta
            desafíos en la participación activa en terapias. La incorporación de
            juegos serios para terapia y rehabilitación se presenta como una
            herramienta prometedora para abordar estos problemas, combinando
            elementos lúdicos con objetivos terapéuticos.
          </p>
        </div>

        <div className="about-column">
          <img src="src\assets\logos\ludologo.png" alt="Descripción de la imagen 2" />
          <h1>Explicación del proyecto</h1>
          <p>
            Actualmente, existen diversas
            aplicaciones de Comunicación Aumentativa y Alternativa (CAA), como
            Proloquo2Go, TouchChat HD y Boardmaker, que ayudan a personas con
            dificultades del habla. Cada aplicación tiene sus ventajas y
            desafíos, y la elección depende de las necesidades específicas de
            cada usuario. Sin embargo, algunas limitaciones, como costos y
            curvas de aprendizaje, pueden afectar su accesibilidad.
          </p>
        </div>

        <div className="about-column">
          <img src="src\assets\logos\ludologo.png" alt="Descripción de la imagen 3" />
          <h1>Ludolab</h1>
          <p>
            En respuesta a estas limitaciones, se propone el desarrollo de un
            Tablero de Comunicación Personalizable basado en imágenes o
            símbolos. Este proyecto busca mejorar significativamente la
            comunicación y calidad de vida de las personas con dificultades del
            habla. Los objetivos incluyen el desarrollo de un tablero adaptable,
            evaluaciones de usabilidad exitosas y documentación comprensible
            para los usuarios.
          </p>
        </div>
      </div>
      <div className="footer">
          
      </div>
    </div>
  );
}

export default AboutUs;
