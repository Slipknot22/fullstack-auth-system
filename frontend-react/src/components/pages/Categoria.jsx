import { useEffect } from "react";

import Navbar from "../Navbar";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaHome
} from "react-icons/fa";

export default function Categoria() {

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

      {/* CATEGORIAS */}
      <section className="servicos">

        <h2>Categorias</h2>

        <p>
          Tecnologias e áreas que estudo
          e desenvolvo atualmente.
        </p>

        <div className="services-grid">

          {/* FRONT-END */}
          <div className="service-card">

            <FaCode className="service-icon" />

            <h3>Front-End</h3>

            <p>
              Desenvolvimento de interfaces
              modernas e responsivas.
            </p>

          </div>

          {/* REACT */}
          <div className="service-card">

            <FaReact className="service-icon" />

            <h3>React</h3>

            <p>
              Criação de aplicações modernas
              utilizando React e componentes reutilizáveis.
            </p>

          </div>

          {/* JAVASCRIPT */}
          <div className="service-card">

            <FaJs className="service-icon" />

            <h3>JavaScript</h3>

            <p>
              Desenvolvimento de lógica,
              interatividade e sistemas web.
            </p>

          </div>

          {/* NODE */}
          <div className="service-card">

            <FaNodeJs className="service-icon" />

            <h3>Node.js</h3>

            <p>
              Desenvolvimento back-end
              com APIs REST e autenticação.
            </p>

          </div>

          {/* MYSQL */}
          <div className="service-card">

            <FaDatabase className="service-icon" />

            <h3>MySQL</h3>

            <p>
              Modelagem e integração
              com banco de dados relacionais.
            </p>

          </div>

          {/* HTML */}
          <div className="service-card">

            <FaHtml5 className="service-icon" />

            <h3>HTML5</h3>

            <p>
              Estruturação moderna
              e semântica de páginas web.
            </p>

          </div>

          {/* CSS */}
          <div className="service-card">

            <FaCss3Alt className="service-icon" />

            <h3>CSS3</h3>

            <p>
              Estilização moderna,
              animações e responsividade.
            </p>

          </div>

          {/* BACK-END */}
          <div className="service-card">

            <FaServer className="service-icon" />

            <h3>Back-End</h3>

            <p>
              Desenvolvimento de sistemas,
              APIs e lógica de servidor.
            </p>

          </div>

        </div>

        {/* BOTÃO */}
        <div className="buttons-servicos">

          <a href="/" className="btn-voltar">

            <FaHome />

            Voltar ao início

          </a>

        </div>

      </section>

    </>

  );

}