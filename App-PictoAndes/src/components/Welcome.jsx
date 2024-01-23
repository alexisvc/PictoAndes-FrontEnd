import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaBars,
  FaGamepad,
  FaList,
  FaSignInAlt,
  FaSignOutAlt,
  FaTable,
  FaUserAlt,
  FaUserPlus,
} from "react-icons/fa";
import PopUpExit from "./extras/PopUpExit";

function Welcome({ user, logout, isGuestUser }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

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
      <div
        className="app-navigation"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {isLoggedIn && (
          <>
            {/*<button className="user">
              <Link to="/edit-user" className="link-button">
                <FaUserAlt />
                <span>{user.name}</span>
              </Link>
        </button>*/}
            <button onClick={() => setIsPopUpOpen(true)}>
              <FaSignOutAlt />
              <span>Salir</span>
            </button>
          </>
        )}
        
      </div>
      <h2>Bienvenido a PictoAndes</h2>
      <div className="welcome-img">
        <img
          src="src\assets\characters\condor.png"
          alt="imagen de la aventura"
        />
      </div>

      {isLoggedIn && (
        <div>
          {!isGuestUser && (
            <button>
            <Link to="/pictogram-menu" className="link-button">
              <FaList />
              <span>Pictogramas</span>
            </Link>
          </button>
          )}
          <button>
            <Link to="/acc-menu" className="link-button">
            <FaTable />
              <span>Tablero de Comunicación</span>
            </Link>
          </button>
          <button>
            <Link to="/game-menu" className="link-button">
              <FaGamepad />
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
          {/*<p>Realizado por: Vizuete Alexis || Tutora: Dra. Carrión Mayra</p>
          <p>© 2024 PictoAndes</p>*/}
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
