import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Servicos from "./components/pages/Servico";
import Categoria from "./components/pages/Categoria";
import Login from "./components/pages/Login";
import Projetos from "./components/pages/Projetos";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/sobre"
        element={<Sobre />}
      />

      <Route
        path="/servico"
        element={<Servicos />}
      />

      <Route
        path="/categoria"
        element={<Categoria />}
      />

      <Route
        path="/projetos"
        element={<Projetos />}
      />


      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>

  );

}

export default App;