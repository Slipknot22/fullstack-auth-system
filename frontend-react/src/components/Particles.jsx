import { useEffect } from "react";

export default function Particles() {

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
            enable: true,
            distance: 150
          },

          color: {
            value: "#d81919"
          }

        }

      });

    };

    document.body.appendChild(script);

  }, []);

  return <div id="particles-js"></div>;

}