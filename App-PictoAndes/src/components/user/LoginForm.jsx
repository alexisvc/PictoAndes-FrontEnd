import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css"

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
    <div className="login">
      <div className="login-form">
        <h2 className="login-heading">LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="username"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <button className="login-button">Login now</button>
          </div>
        </form>
        <div className="footer-login">
          <p>
            Don't have an account?
            <Link to="/register" className="login-link"> Signup now</Link>
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
  );
};
