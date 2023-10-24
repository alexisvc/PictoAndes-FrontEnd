import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Agregar estado para el checkbox
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error("Debes aceptar los términos y condiciones.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      // Tu lógica de registro aquí
      toast.success("Registro exitoso", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Error al hacer registro:", error);
      toast.error("El usuario ya existe. Por favor, inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
    }
  };

  const handleTermsAcceptedChange = useCallback(() => {
    setTermsAccepted(!termsAccepted);
  }, [termsAccepted]);

  return (
    <div className="registration">
      <div className="img-form">
        <img
          src="src\assets\characters\condor.png"
          alt="imagen de la aventura"
        />
      </div>
      <div className="registration-form">
        <h2 className="registration-heading">REGISTER</h2>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
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
              className="input-field"
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
              className="input-field"
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsAcceptedChange}
              />
              I accept all terms & conditions
            </label>
          </div>
          <div>
            <button className="register-button" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="footer-register">
          <p>
            Already have an account?
            <Link to="/" className="register-link"> Login now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
