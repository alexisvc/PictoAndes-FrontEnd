import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginForm } from "./components/user/LoginForm";
import PictogramForm from "./components/pictograms/PictogramForm";
import RegistrationForm from "./components/user/RegistrationForm";
import { PictogramDisplay } from "./components/acc/PictogramDisplay";
import PictogramList from "./components/pictograms/PictogramList";
import { useUser } from "./hooks/useUser";
import { usePictograms } from "./hooks/usePictograms";
import Home from "./components/Home";
import { FaHome, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import "./App.css";
import RecognitionGame from "./components/games/recognition-game/RecognitionGame";
import PictogramMenu from "./components/pictograms/PictogramMenu";
import GameMenu from "./components/games/GameMenu";
import AccGame from "./components/games/acc-game/AccGame";
import PictogramAccMenu from "./components/acc/PictogramACCMenu";

function App() {
  const { user, logout, login } = useUser();
  const { pictograms, createPictogram, updatePictogram, deletePictogram } =
    usePictograms(user);

  const isLoggedIn = !!user;

  return (
    <div className="app">
      <Router>
        <ToastContainer />
        {/*<div className="navbar">
          {!isLoggedIn ? (
            <>
              <div className="nav-left">
                <button>
                  <Link to="/">
                    <FaHome />
                    <span>Inicio</span>
                  </Link>
                </button>
              </div>
              <div className="nav-right">
                <button>
                  <Link to="/login">
                    <FaSignInAlt />
                    <span>Iniciar sesión</span>
                  </Link>
                </button>
                <button>
                  <Link to="/register">
                    <FaUserPlus />
                    <span>Registrarse</span>
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="nav-left">
                <button>
                  <Link to="/">
                    <FaHome />
                    <span>Inicio</span>
                  </Link>
                </button>
              </div>
              <div className="nav-right">
                <button>
                  <Link to="/pictogram-menu">
                    <span>Pictogramas</span>
                  </Link>
                </button>
                <button>
                  <Link to="/saac">
                  <span>Tablero</span>
                  </Link>
                </button>
                <button>
                  <Link to="/game-menu">
                  <span>Juegos</span>
                  </Link>
                </button>
                <button onClick={logout}>
                  <Link to="/">
                    <FaSignOutAlt />
                    <span>Cerrar sesión</span>
                  </Link>
                </button>
              </div>
            </>
          )}
          </div>*/}

        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={ isLoggedIn ? <Navigate to="/" /> : <LoginForm login={login} /> }
            />
            <Route
              path="/register"
              element={isLoggedIn ? <Navigate to="/" /> : <RegistrationForm />}
            />
            <Route
              path="/acc-menu"
              element={isLoggedIn ? (<PictogramAccMenu />) : (<Home />)}
            />
            <Route
              path="/saac"
              element={
                isLoggedIn ? <PictogramDisplay images={pictograms} /> : <Home />
              }
            />
            <Route
              path="/game-menu"
              element={
                isLoggedIn ? (<GameMenu />) : (<Home />)
              }
            />
            <Route
              path="/recognition-game"
              element={
                isLoggedIn ? (<RecognitionGame pictograms={pictograms} />) : (<Home />)
              }
            />
            <Route
              path="/acc-game"
              element={
                isLoggedIn ? (<AccGame />) : (<Home />)
              }
            />
            <Route
              path="/pictogram-menu"
              element={isLoggedIn ? <PictogramMenu /> : <Home />}
            />
            <Route
              path="/pictogram-form"
              element={
                isLoggedIn ? (
                  <PictogramForm 
                    createPictogram={createPictogram} 
                  />
                ) : ( <Home /> )
              }
            />
            <Route
              path="/pictogram-list"
              element={
                isLoggedIn ? (
                  <PictogramList
                    pictograms={pictograms}
                    updatePictogram={updatePictogram}
                    deletePictogram={deletePictogram}
                  />
                ) : (
                  <Home />
                )
              }
            />
            <Route path="/" element={<Home user={user} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
