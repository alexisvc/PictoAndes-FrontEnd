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

function Welcome({ user, logout }) {
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
        { isLoggedIn && (<button>
          <FaSignOutAlt onClick={logout} />
          <span>Salir</span>
        </button> )}
        {/*<button onClick={handleMenuClick}>
          <FaBars />
          <span>Menú</span>
        </button>*/}
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
      <h2>Bienvenido a PictoAndes</h2>
      <div className="welcome-img">
        <img
          src="src\assets\characters\condor.png"
          alt="imagen de la aventura"
        />
      </div>
      
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
          <img src="src\assets\logos\epn2.png" alt="imagen de la aventura" />
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

export default Welcome;
