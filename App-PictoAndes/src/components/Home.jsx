import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaGamepad,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

function Home({ user }) {
  const isLoggedIn = !!user;
  return (
    <div className="welcome">
      <h1>Aventura de los</h1>
      <h1>PictoAndes</h1>
      <h2>La búsqueda de la comunicación</h2>
      <div className="welcome-img">
        <img
          src="src\assets\characters\condor.png"
          alt="imagen de la aventura"
        />
      </div>
      {!isLoggedIn && (
        <div>
          <button>
            <Link to="/login" className="link-button">
              <FaSignInAlt />
              <span> Iniciar Sesión</span>
            </Link>
          </button>
          <button>
            <Link to="/" className="link-button">
              <FaGamepad />
              <span> Jugar como invitado</span>
            </Link>
          </button>
          <button>
            <Link to="register" className="link-button">
              <FaUserPlus />
              <span> Registrarse</span>
            </Link>
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <button>
            <Link to="/pictogram-menu" className="link-button">
              <span>Pictogramas</span>
            </Link>
          </button>
          <button>
            <Link to="/acc-menu" className="link-button">
              <span>Tablero de Comunicación</span>
            </Link>
          </button>
          <button>
            <Link to="/game-menu" className="link-button">
              <span> Juegos</span>
            </Link>
          </button>
        </div>
      )}
      <div className="footer">
        <p>Realizado por: Vizuete Alexis</p>
        <p>© 2023 PictoAndes</p>
      </div>
    </div>
  );
}

export default Home;
