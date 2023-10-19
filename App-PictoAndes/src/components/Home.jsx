import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"

function Home({ user }) {
  const isLoggedIn = !!user;
  return (
    <div className="welcome">
      <h1>Aventura de los PictoAndes</h1>
      <h2>La búsqueda de la comunicación</h2>
      <div>
        <img src="src\assets\characters\condor.png" alt="imagen de la aventura" />  
      </div>
      {!isLoggedIn && (
        <div>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button>
            <Link to="/register">Jugar como invitado</Link>
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <button>
            <Link to="/create">Crear un nuevo Pictograma</Link>
          </button>
          <button>
            <Link to="/saac">Ir a SAAC</Link>
          </button>
          <button>
            <Link to="/game">Jugar</Link>
          </button>
          <button>
            <Link to="/pictograms">Pictogramas</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
