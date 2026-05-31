import imagemVictor from "./pages/img/img.jpg";

export default function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">

        <img
          src={imagemVictor}
          alt="Victor"
          className="hero-img"
        />

        <h1 className="hero-title">
          Olá, sou Victor
        </h1>
          
        <p className="hero-title">
      Desenvolvedor Full Stack
     </p>

    
      </div>

    </section>

  );

}