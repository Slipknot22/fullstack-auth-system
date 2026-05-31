import { useState } from "react";

import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaLayerGroup,
  FaCode,
  FaSignInAlt
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <header className="navbar">

      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          Victor
        </div>

        {/* MENU */}
        <ul
          className={
            menuOpen
              ? "nav-menu active"
              : "nav-menu"
          }
        >

          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome />
              Início
            </Link>
          </li>

          <li>
            <Link
              to="/sobre"
              onClick={() => setMenuOpen(false)}
            >
              <FaUser />
              Sobre
            </Link>
          </li>

          <li>
            <Link
              to="/servico"
              onClick={() => setMenuOpen(false)}
            >
              <FaBriefcase />
              Serviços
            </Link>
          </li>

          <li>
            <Link
              to="/categoria"
              onClick={() => setMenuOpen(false)}
            >
              <FaLayerGroup />
              Categoria
            </Link>
          </li>

          <li>
            <Link
              to="/projetos"
              onClick={() => setMenuOpen(false)}
            >
              <FaCode />
              Projetos
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              <FaSignInAlt />
              Login
            </Link>
          </li>

        </ul>

        {/* MENU MOBILE */}
        <div
          className="menu-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </div>

      </div>

    </header>

  );

}