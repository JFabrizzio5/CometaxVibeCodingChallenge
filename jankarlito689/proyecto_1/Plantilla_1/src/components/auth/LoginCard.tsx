export default function LoginCard() {
    return (
        <div className="custom-card p-5 w-100">
            <h2 className="fw-bold mb-4 text-center">
                Iniciar sesión
            </h2>

            <div className="mb-4">
                <input
                className="form-control"
                placeholder="Correo electrónico"
                />
            </div>

            <div className="mb-4">
                <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                />
            </div>

            <button className="btn-primary-custom w-100">
                Ingresar
            </button>
        </div>
    );
}