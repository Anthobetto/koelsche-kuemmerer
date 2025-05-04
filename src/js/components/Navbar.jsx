import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md me-6">
      <div className="container-fluid d-flex justify-content-between">
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

        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            marginRight: "auto", 
          }}
        >
          <div style={{ width: "72px" }}> {/* 60px x 1.2 */}
            <img
              src="/images/image010.png"
              alt="Koelsche-Kuemmerer"
              height="50"
              style={{
                transform: "scale(1.2)",
                transformOrigin: "left center",
                display: "block",
              }}
            />
          </div>
        </Link>

        <div className="collapse navbar-collapse justify-content-center mx-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/360-grad-service">360-Grad-Service</Link>
            </li>
            <li className="nav-item"><Link className="nav-link link-secondary" to="/über-uns">Über uns</Link></li>
            <li className="nav-item"><Link className="nav-link link-secondary" to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
