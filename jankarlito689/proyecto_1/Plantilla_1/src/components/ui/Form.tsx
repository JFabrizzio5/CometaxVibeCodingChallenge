export default function ContactForm() {
    return (
        <div className="custom-card p-5">

            <h2 className="fw-bold mb-4">
                Formulario de contacto
            </h2>

            <div className="mb-4">
                <input
                className="form-control"
                placeholder="Nombre"
                />
            </div>

            <div className="mb-4">
                <input
                className="form-control"
                placeholder="Correo"
                />
            </div>

            <div className="mb-4">
                <select className="form-select">
                    <option>
                        Selecciona una categoría
                    </option>
                </select>
            </div>

            <div className="mb-4">
                <textarea
                className="form-control"
                rows={5}
                placeholder="Comentarios"
                >
                </textarea>
            </div>
            <button className="btn-primary-custom">
                Enviar
            </button>
        </div>
    );
}