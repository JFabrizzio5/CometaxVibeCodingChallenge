export default function UserProfile() {
    return (
        <div className="custom-card p-5 text-center">
            <img
                src="https://placehold.co/120"
                className="rounded-circle mb-4"
            />

            <h2 className="fw-bold">
                Cesar Leos
            </h2>

            <p className="text-secondary">
                admin@saas.com
            </p>

            <button className="btn btn-danger mt-4">
                Cerrar sesión
            </button>
        </div>
    );
}