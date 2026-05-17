export default function ContactForm() {

    const categories = [
        "Soporte técnico",
        "Ventas",
        "Facturación",
        "Marketing",
        "Integraciones",
        "Recursos humanos",
        "Partnerships",
        "Otro"
    ];

    return (
        <section className="premium-form-wrapper">

            <div className="premium-form-card">
                {/* Header */}
                <div className="form-header">
                    <span className="form-badge">
                        Contacto
                    </span>

                    <h2 className="form-title">
                        Hablemos sobre tu proyecto
                    </h2>

                    <p className="form-subtitle">
                        Nuestro equipo responderá en menos de 24 horas.
                    </p>
                </div>
                {/* Form */}
                <form className="mt-5">
                    <div className="row">
                        {/* Nombre */}
                        <div className="col-md-6 mb-4">
                            <label className="premium-label">
                                Nombre completo
                            </label>

                            <input
                                type="text"
                                className="form-control premium-input"
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        {/* Email */}
                        <div className="col-md-6 mb-4">
                            <label className="premium-label">
                                Correo electrónico
                            </label>

                            <input
                                type="email"
                                className="form-control premium-input"
                                placeholder="correo@empresa.com"
                            />
                        </div>
                    </div>
                    {/* Categoría */}
                    <div className="mb-4">
                        <label className="premium-label">
                            Categoría
                        </label>

                        <select className="form-select premium-input">
                            <option>
                                Selecciona una categoría
                            </option>

                            {categories.map((item) => (
                                <option key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Empresa */}

                    <div className="mb-4">
                        <label className="premium-label">
                            Empresa
                        </label>

                        <input
                        type="text"
                        className="form-control premium-input"
                        placeholder="Nombre de tu empresa"
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className="mb-4">
                        <label className="premium-label d-block mb-3">
                            Servicios de interés
                        </label>

                        <div className="d-flex flex-wrap gap-3">
                            <div className="premium-check">
                                <input type="checkbox" />
                                <span>Dashboard</span>
                            </div>

                            <div className="premium-check">
                                <input type="checkbox" />
                                <span>Automatización</span>
                            </div>

                            <div className="premium-check">
                                <input type="checkbox" />
                                <span>Analytics</span>
                            </div>

                            <div className="premium-check">
                                <input type="checkbox" />
                                <span>API</span>
                            </div>
                        </div>
                    </div>
                    {/* Comentarios */}
                    <div className="mb-4">
                        <label className="premium-label">
                            Comentarios
                        </label>

                        <textarea
                        rows={6}
                        className="form-control premium-input premium-textarea"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        >
                        </textarea>
                    </div>
                    {/* Footer */}
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 mt-5">
                        <p className="form-footer-text">
                            Al enviar este formulario aceptas nuestros términos.
                        </p>
                        <button type="button" className="btn premium-submit-btn" >
                            Enviar solicitud
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}