import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center mt-auto py-3 px-4 border-top" style={{ background: "#00cccc" }}>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                    <Link to="/" className="mb-3 mb-md-0 text-white text-decoration-none lh-1">
                        <span>© Koelsche-Kuemmerer</span>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex flex-wrap">
                    <li className="ms-3">
                        <Link className="text-white" to="https://instagram.com/">
                            <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-white" to="https://facebook.com/">
                            <i className="fab fa-facebook" style={{ fontSize: "24px" }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-white" to="https://wa.me/491722956731?text=Hallo,%20ich%20würde%20gerne%20Informationen%20über%20Ihre%20Dienstleistungen%20anforder">
                            <i className="fab fa-whatsapp" style={{ fontSize: "24px" }}></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-white" to="/impressum">
                            Impressum
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="text-white" to="/datenschutz">
                            Datenschutz
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    );
};