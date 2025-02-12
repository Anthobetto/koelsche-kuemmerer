import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <div className="container-fluid">
        {/* Botón Hamburguesa en Móvil */}
        <button 
          className="navbar-toggler bg-success-subtle" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img height="50" src="/images/Home-button.png" alt="Koelsche-Kuemmerer" />
        </Link>

        {/* Menú (colapsable en móvil) */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/360-grad-service">360-Grad-Service</Link>
            </li>
            <li className="nav-item"><Link className="nav-link link-secondary" to="/galerie">Galerie</Link></li>
            <li className="nav-item"><Link className="nav-link link-secondary" to="/über-uns">Über uns</Link></li>
            <li className="nav-item"><Link className="nav-link link-secondary" to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

{/*
  •	El menú será colapsable en pantallas pequeñas.
	•	Agrego un botón hamburguesa (navbar-toggler) para abrir y cerrar el menú en móvil.
	•	Uso el navbar-expand-md, para que el menú solo se expanda en pantallas medianas en adelante.
  */}