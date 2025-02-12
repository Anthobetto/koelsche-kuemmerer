// Contact.jsx
import React, { useState, useContext } from "react";
import { AppContext } from "../store/appContext";

export const Contact = () => {
    const { actions } = useContext(AppContext);  // Accedemos a las acciones del contexto
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [loading, setLoading] = useState(false); // Para manejar el estado de carga

    const handleChange = ({ target }) =>
        setFormData({ ...formData, [target.name]: target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  // Indicamos que se está enviando el formulario

        // Llamamos a la acción sendContactForm con los datos del formulario
        actions.sendContactForm(formData);

        // Limpiamos el formulario y terminamos el estado de carga
        setFormData({ email: "", message: "" });
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
                                            value={formData.email}
                                            onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-outline-info" 
                                        disabled={loading}  // Deshabilitamos el botón mientras se envía el formulario
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