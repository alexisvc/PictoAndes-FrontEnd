import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "../../hooks/useRegistration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { registerUser, isRegistered } = useRegistration();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ username, password });
      toast.success("Registro exitoso", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Error al hacer login:", error);
      toast.error("El usuario ya existe. Por favor, inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
    }
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          {/* Redirige al usuario a la página de inicio de sesión */}
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      ) : (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit" >
                Register
              </button>
              <button type="button" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
