import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaBars, FaGamepad, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import FloatingMenu from "./Extras/FloatingMenu";

function Home({ user, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = !!user;

  return (
    <div className="welcome">
      <div
        className="app-navigation"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <button onClick={handleMenuClick}>
          <FaBars />
          <span>Menú</span>
        </button>
      </div>

      {isMenuOpen && (
        <FloatingMenu
          onClose={() => {
            setIsMenuOpen(false);
          }}
          user={user}
          logout={logout}
        />
      )}
      <h1>PictoAndes</h1>
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
              <span>Juego de Reconocimiento</span>
            </Link>
          </button>
        </div>
      )}
      <div className="footer">
        <div>
        <img
          src="src\assets\logos\epn2.png"
          alt="imagen de la aventura"
        />
        </div>
        <div>
          <p>Realizado por: Vizuete Alexis || Tutora: Dra. Carrión Mayra</p>
          <p>© 2023 PictoAndes</p>
        </div>
        <div>
        <img
          src="src\assets\logos\ludologo.png"
          alt="imagen de la aventura"
        />
        </div>
      </div>
    </div>
  );
}

export default Home;
