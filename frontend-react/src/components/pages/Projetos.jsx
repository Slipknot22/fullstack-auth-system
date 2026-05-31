import { useEffect } from "react";

import Navbar from "../Navbar";

import {
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode
} from "react-icons/fa";

export default function Projetos() {

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

      {/* PROJETOS */}
      <section className="servicos">

        <h2>Meus Projetos</h2>

        <p>
          Alguns projetos modernos desenvolvidos
          com foco em design, responsividade
          e experiência do usuário.
        </p>

        <div className="services-grid">

          {/* PROJETO 1 */}
          <div className="service-card">

            <FaLaptopCode className="service-icon" />

            <h3>CrypInvest Landing Page</h3>

            <p>
              Landing page moderna sobre
              investimentos digitais e tecnologia,
              desenvolvida com HTML, CSS e JavaScript.
            </p>

            <div className="buttons-servicos">

              <a
                href="https://slipknot22.github.io/crypinvesti-landing-page/"
                target="_blank"
                className="btn-voltar"
              >
                <FaExternalLinkAlt />
                Ver Projeto
              </a>

            </div>

          </div>

          {/* PROJETO 2 */}
          <div className="service-card">

            <FaCode className="service-icon" />

            <h3>Portfolio Moderno</h3>

            <p>
              Template de portfólio moderno,
              responsivo e elegante para
              desenvolvedores e freelancers.
            </p>

            <div className="buttons-servicos">

              <a
                href="https://slipknot22.github.io/Modern-responsive-portfolio-template-/"
                target="_blank"
                className="btn-voltar"
              >
                <FaExternalLinkAlt />
                Ver Projeto
              </a>

            </div>

          </div>

        </div>

        {/* BOTÃO VOLTAR */}
        <div className="buttons-servicos">

          <a href="/" className="btn-voltar">

            <FaGithub />

            Voltar ao início

          </a>

        </div>

      </section>

    </>

  );

}