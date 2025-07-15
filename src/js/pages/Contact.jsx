import React, { useState } from "react";

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        try {
            const response = await fetch("https://koelsche-kuemmerer.koeln/send_email.php", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert("Mail gesendet");
                e.target.reset();
            } else {
                alert("Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut");
            }
        } catch (error) {
            alert("Ein Problem mit dem Server ist aufgetreten");
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Kontaktformular</h2>
                            <form onSubmit={handleSubmit}>
                                {/* ...campos del formulario... */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Dein Name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-Mail Adresse</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="name@beispiel.de"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Telefonnummer</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="number"
                                            name="number"
                                            placeholder="+49 123 456789"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Ihre Anfrage schreiben:</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-info"
                                        disabled={loading}
                                    >
                                        {loading ? "Senden..." : "Senden"} <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>

                            {/* NUEVA SECCIÓN DE CONTACTO */}
                            <hr className="my-4" />
                            <div className="mt-4">
                                <h5 className="text-center mb-3">Du kannst uns auch erreichen über:</h5>
                                <ul className="list-unstyled text-center">
                                    <li><i className="fas fa-phone-alt me-2"></i>Telefon: <a href="tel:+491722956731">+49 172 2956731</a></li>
                                    <li><i className="fas fa-envelope me-2"></i>Email: <a href="mailto:kontakt@beispiel.de">juergen.loschke@koelsche-kuemmerer.koeln</a></li>
                                    <li><i className="fas fa-map-marker-alt me-2"></i>Adresse: Schwalbacher Str. 51, Köln</li>
                                </ul>
                            </div>
                            {/* FIN DE NUEVA SECCIÓN */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};