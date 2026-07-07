export default function DashboardHeader({ title = "Dashboard" }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">{title}</h2>
            <button className="btn btn-primary custom-btn">
                Exportar
            </button>
        </div>
    );
}