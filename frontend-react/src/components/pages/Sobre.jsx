import { useEffect } from "react";

import Navbar from "../Navbar";

export default function Sobre() {

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

      {/* SOBRE */}
      <section className="container sobre-page">

        <div className="glass">

          <h2>Sobre Mim</h2>

          <p>
            Sou desenvolvedor Full Stack focado
            em criar interfaces modernas,
            responsivas e de alta performance.
          </p>

          <p>
            Tenho experiência com React,
            JavaScript, Node.js, Express
            e integração com MySQL.
          </p>

          <p>
            Também estudo APIs REST,
            back-end moderno e desenvolvimento
            de sistemas completos Full Stack.
          </p>

        </div>

      </section>

    </>

  );

}