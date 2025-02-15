import React, { useState } from "react";

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        setLoading(true);

        const formData = new FormData(e.target); // Recoger los datos del formulario

        try {
            const response = await fetch("https://koelsche-kuemmerer.koeln/send_email.php", {
                method: "POST", // Enviar datos como POST
                body: formData, // Los datos del formulario van en el cuerpo de la solicitud
            });

            const data = await response.json(); // Respuesta JSON del servidor

            if (data.success) {
                alert("Mail gesendet");
                e.target.reset(); // Limpiar el formulario
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
                                            name="name" // Asegúrate de que el nombre es "name"
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
                                            name="email" // Asegúrate de que el nombre es "email"
                                            placeholder="name@beispiel.de"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Ihre Anfrage schreiben:</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message" // Asegúrate de que el nombre es "message"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};