import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { FaArrowCircleLeft, FaHome } from "react-icons/fa";

export const LoginForm = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login({ username, password });
      console.log("Login realizado con éxito");
      setUsername("");
      setPassword("");
      toast.success("Login exitoso", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error al hacer login:", error);
      toast.error("Credenciales incorrectas. Por favor, inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-content">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
        </button>
      </div>
      <div className="login">
        <div className="login-title">
          <h1>PictoAndes</h1>
        </div>
        
        <div className="login-form">
          <h2 className="login-heading">Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="form-input">
              <p>Usuario:</p>
              <input
                type="text"
                placeholder="Introduce tu nombre de usuario"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Contraseña:</p>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div>
              <button className="login-button">Ingresar</button>
            </div>
          </form>
          <div className="footer-login">
            <p>
              ¿No tienes una cuenta?
              <Link to="/register" className="login-link">
                {" "}
                Regístrate ahora
              </Link>
            </p>
          </div>
        </div>
        <div className="img-form">
          <img
            src="src\assets\characters\condor.png"
            alt="imagen de la aventura"
          />
        </div>
      </div>
    </div>
  );
};
