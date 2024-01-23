import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaGamepad,
  FaInfoCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaUserPlus,
} from "react-icons/fa";

import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import PopUpExit from "./extras/PopUpExit";

function Home({ user, logout, login }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();

  const handleImageClick = () => {
    if (!speaking) {
      speak(
        "Texto descriptivo"
      );
    }
  };

  // Login de invitado
  const handleGuestLogin = async () => {
    await login({
      username: "invitado@correo.com",
      password: "invitado123@",
    });
  };

  const isLoggedIn = !!user;

  return (
    <div className="welcome">
      {isPopUpOpen && (
        <PopUpExit
          onClose={() => {
            setIsPopUpOpen(false);
          }}
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
            <button>
              <Link to="/about-us" className="link-button">
                <FaInfoCircle />
                <span>Acerca de </span>
              </Link>
            </button>
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
            <button onClick={handleGuestLogin}>
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
            <div></div>
            <div>
              <img
                className="logo"
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
            {/*<div className="user">
              <FaUserAlt />
              <span>{user.name}</span>
      </div>*/}
            <button onClick={() => setIsPopUpOpen(true)}>
              <FaSignOutAlt />
              <span>Salir</span>
            </button>
          </div>
          <h2>Bienvenido a PictoAndes</h2>
          <div className="home-content">
            <img src="public\messages\2.png" alt="imagen de la aventura" />
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
