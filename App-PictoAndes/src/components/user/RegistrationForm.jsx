import React, { useState, useCallback } from "react";
import { useRegistration } from "../../hooks/useRegistration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import {
  FaArrowCircleLeft,
  FaHome,
  FaQuestion,
  FaYoutube,
} from "react-icons/fa";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const { registerUser } = useRegistration();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error("Debes aceptar los términos y condiciones.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validar las contraseñas
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "La contraseña debe tener al menos 8 caracteres y contener una letra mayúscula, una minúscula, un número y un símbolo - / :; & @.?!%*",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.", {
        position: "top-right",
        autoClose: 3000,
      });
      setConfirmPassword("");
      return;
    }

    try {
      await registerUser({ username, name, password });
      toast.success("Registro exitoso", {
        position: "top-center",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);
      navigate("/login");
    } catch (error) {
      console.error("Error al hacer registro:", error);
      toast.error("El usuario ya existe. Por favor, inténtalo de nuevo.", {
        position: "top-right",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      setTermsAccepted(false);
    }
  };

  const handleTermsAcceptedChange = useCallback(() => {
    setTermsAccepted(!termsAccepted);
  }, [termsAccepted]);

  const handleImageClick = () => {
    if (!speaking) {
      speak(
        "Hola bienvenido al mundo de los pictogramas, selecciona una opción para continuar"
      );
    }
  };

  return (
    <div className="registration-content">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
          <span>Atrás</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          <span>Inicio</span>
        </button>
        <h1>PictoAndes</h1>
        <button
          onClick={() => {
            // Mostrar instrucciones
          }}
        >
          <FaQuestion />
          <span>Indicaciones</span>
        </button>
        <button
          onClick={() => {
            // Mostrar ayuda
          }}
        >
          <FaYoutube />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="registration">
        <div className="img-form">
          <img
            src="src\assets\characters\condor.png"
            alt="imagen de la aventura"
          />
        </div>
        <div className="registration-form">
          <h3>Registrarse</h3>
          <form onSubmit={handleRegister}>
            <div className="form-input">
              <p>Nombre completo:</p>
              <input
                type="text"
                placeholder="Ingresa tu nombre. Ej: Alexis Vizuete"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Usuario:</p>
              <input
                type="text"
                placeholder="Ingresa tu nombre de usuario. Ej: alexisvc22"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Contraseña:</p>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-icon"
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
            </div>
            <div className="form-input">
              <p>Confirmar contraseña:</p>
              <div className="password-field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="input-field"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="eye-icon"
                >
                  {showConfirmPassword ? "👁️" : "🔒"}
                </button>
              </div>
            </div>
            <div className="input-terms">
              <label className="terms">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={handleTermsAcceptedChange}
                />
                Acepto todos los <a href="">términos y condiciones</a>
              </label>
            </div>
            <div>
              <button className="register-button" type="submit">
                Registrarse
              </button>
            </div>
          </form>
          {/*<div className="footer-register">
            <p>
              ¿Ya tienes una cuenta?
              <Link to="/login" className="register-link">
                {" "}
                Iniciar sesión
              </Link>
            </p>
          </div>9*/}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
