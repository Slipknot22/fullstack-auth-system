import { useEffect } from "react";

import Navbar from "../Navbar";

import {
  FaHome,
  FaEnvelope,
  FaCode,
  FaServer,
  FaDatabase
} from "react-icons/fa";

export default function Servicos() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/particles.js";

    script.onload = () => {

      window.particlesJS("particles-js", {

        particles: {

          number: {
            value: 80
          },

          size: {
            value: 3
          },

          move: {
            speed: 2
          },

          line_linked: {
            enable: true
          },

          color: {
            value: "#3b82f6"
          }

        }

      });

    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

  }, []);

  return (

    <>

      {/* PARTICLES */}
      <div id="particles-js"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* SERVIÇOS */}
      <section className="servicos">

        <h2>Meus Serviços</h2>

        <p>
          Desenvolvimento Full Stack moderno com foco
          em performance, design profissional e
          experiência do usuário.
        </p>

        <div className="services-grid">

          {/* FRONT-END */}
          <div className="service-card">

            <FaCode className="service-icon" />

            <h3>Front-End Moderno</h3>

            <p>
              Criação de interfaces modernas,
              responsivas e interativas utilizando
              React, HTML, CSS e JavaScript.
            </p>

          </div>

          {/* BACK-END */}
          <div className="service-card">

            <FaServer className="service-icon" />

            <h3>Back-End</h3>

            <p>
              Desenvolvimento de APIs REST,
              autenticação JWT e sistemas com
              Node.js e Express.
            </p>

          </div>

          {/* MYSQL */}
          <div className="service-card">

            <FaDatabase className="service-icon" />

            <h3>Banco de Dados</h3>

            <p>
              Modelagem e integração com MySQL
              para sistemas completos e escaláveis.
            </p>

          </div>

        </div>

        {/* BOTÕES */}
        <div className="buttons-servicos">

          <a href="/contato" className="btn-voltar">

            <FaEnvelope />

            Solicitar serviço

          </a>

          <a href="/" className="btn-voltar">

            <FaHome />

            Voltar ao início

          </a>

        </div>

      </section>

    </>

  );

}