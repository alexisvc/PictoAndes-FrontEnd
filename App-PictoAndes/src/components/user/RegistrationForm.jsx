import React, { useState, useCallback } from "react";
import { useRegistration } from "../../hooks/useRegistration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import {
  FaArrowCircleLeft,
  FaBook,
  FaBookOpen,
  FaHome,
  FaQuestion,
} from "react-icons/fa";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Agregar estado para el checkbox

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);
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

    try {
      await registerUser({ username, name, password });
      toast.success("Registro exitoso", {
        position: "top-center",
        autoClose: 3000,
      });
      setUsername("");
      setName("");
      setPassword("");
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
            setIsPopUpOpenInstructions(true);
          }}
        >
          <FaBookOpen />
          <span>Instrucciones</span>
        </button>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="registration">
        {isPopUpOpen && (
          <PopUpHelp
            onClose={() => {
              setIsPopUpOpen(false);
            }}
            url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
          />
        )}
        {isPopUpOpenInstructions && (
          <PopUpInstructions
            instructions={"En esta sección podrás crear y listar pictogramas"}
            url={"/src/assets/characters/condor.png"}
            onClose={() => {
              setIsPopUpOpenInstructions(false);
            }}
          />
        )}
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
                placeholder="Ingresa tu nombre"
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
                placeholder="Ingresa tu nombre de usuario"
                name="username"
                value={username}
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
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
          <div className="footer-register">
            <p>
              ¿Ya tienes una cuenta?
              <Link to="/login" className="register-link">
                {" "}
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
