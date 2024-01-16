import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaBars,
  FaGamepad,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";
import FloatingMenu from "./Extras/FloatingMenu";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";

function Home({ user, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageClick = () => {
    if (!speaking) {
      speak(
        "Hola bienvenido al mundo de los pictogramas, da click en el botón para continuar"
      );
    }
  };

  const isLoggedIn = !!user;

  return (
    <div className="welcome">
      {isMenuOpen && (
        <FloatingMenu
          onClose={() => {
            setIsMenuOpen(false);
          }}
          user={user}
          logout={logout}
        />
      )}
      {!isLoggedIn ? (
        <>
          {/* Componente de LOGIN */}
          <div
            className="app-navigation"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
          </div>
          <h2>Bienvenido a</h2>
          <h1>PictoAndes</h1>
          
          <div className="welcome-img">
            <img
              src="src\assets\characters\condor.png"
              alt="imagen de la aventura"
            />
          </div>
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
              <Link to="/register" className="link-button">
                <FaUserPlus />
                <span> Registrarse</span>
              </Link>
            </button>
          </div>
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
        </>
      ) : (
        <>
          {/* Componente de HOME */}
          <div
            className="app-navigation"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button>
              <FaSignOutAlt onClick={logout} />
              <span>Salir</span>
            </button>
          </div>
          <h2>Bienvenido a PictoAndes</h2>
          <div className="home-content">
            <img
            src="public\messages\2.png" 
            alt="imagen de la aventura" />
            <div>
              <button>
                <Link to="/main-menu" className="link-button">
                  <span>Continuar</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="footer-button">
            <button
              onClick={() => {
                handleImageClick();
              }}
            >
              <FiVolume2 />
              <span>Audio</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
