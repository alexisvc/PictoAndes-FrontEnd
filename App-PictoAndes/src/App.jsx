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
import { FaHome, FaUser } from "react-icons/fa";
import "./App.css";
import RecognitionGame from "./components/games/recognition-game/RecognitionGame";

function App() {
  const { user, logout, login } = useUser();
  const { pictograms, createPictogram, updatePictogram, deletePictogram } =
    usePictograms(user);

  const isLoggedIn = !!user;

  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <div className="navbar">
          {!isLoggedIn && (
            <>
              <div className="nav-left">
                <button>
                  <Link to="/">
                    <FaHome />
                  </Link>
                </button>
              </div>
              <div className="nav-right">
                <button>
                  <Link to="/login">Login</Link>
                </button>
                <button>
                  <Link to="/register">Register</Link>
                </button>
              </div>
            </>
          )}

          {isLoggedIn && (
            <>
              <div className="nav-left">
                <button>
                  <Link to="/">
                    <FaHome />
                  </Link>
                </button>
              </div>
              <div className="nav-right">
                <button>
                  <Link to="/create">Create a new Pictogram</Link>
                </button>
                <button>
                  <Link to="/saac">SAAC</Link>
                </button>
                <button>
                  <Link to="/game">Game</Link>
                </button>
                <button>
                  <Link to="/pictograms">Pictograms</Link>
                </button>
                <button onClick={logout}>
                  <Link to="/">Logout</Link>
                </button>
                {/*<button>
                  <FaUser/>
                  <span>{user.username}</span>
            </button>*/}
              </div>
            </>
          )}
        </div>

        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={
                isLoggedIn ? <Navigate to="/" /> : <LoginForm login={login} />
              }
            />
            <Route
              path="/register"
              element={isLoggedIn ? <Navigate to="/" /> : <RegistrationForm />}
            />
            <Route
              path="/create"
              element={
                isLoggedIn ? (
                  <PictogramForm createPictogram={createPictogram} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/saac"
              element={
                isLoggedIn ? <PictogramDisplay images={pictograms} /> : <Home />
              }
            />
            {/*<Route path="/game" element={ isLoggedIn ? <MenuGame pictograms={pictograms} /> : <Home />} /> */}
            <Route
              path="/game"
              element={
                isLoggedIn ? (
                  <RecognitionGame pictograms={pictograms} />
                ) : (
                  <Home />
                )
              }
            />
            <Route
              path="/pictograms"
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
