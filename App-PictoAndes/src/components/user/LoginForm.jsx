import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
      <div>
        <ToastContainer />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="username"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
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
            />
          </div>
          <div>
            <button>Login</button>
            <button onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </div>
  );
};
