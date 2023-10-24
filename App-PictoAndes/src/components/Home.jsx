import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
              <Link to="/login" className="link-button">Login</Link>
            </button>
            <button>
              <Link to="/register" className="link-button">Play</Link>
            </button>
            <button>
              <Link to="register" className="link-button">Register</Link>
            </button>
          </div>
        )}

        {isLoggedIn && (
          <div>
            <button>
              <Link to="/create" className="link-button">
                Crear un nuevo Pictograma
              </Link>
            </button>
            <button>
              <Link to="/saac" className="link-button">Ir a SAAC</Link>
            </button>
            <button>
              <Link to="/game" className="link-button">Jugar</Link>
            </button>
            <button>
              <Link to="/pictograms" className="link-button">Pictogramas</Link>
            </button>
          </div>
        )}
      </div>
  );
}

export default Home;
