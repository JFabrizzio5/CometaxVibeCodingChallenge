const activities = [
    { label: "Nuevo alumno registrado", time: "Hace 5 minutos" },
    { label: "Pago completado", time: "Hace 20 minutos" },
    { label: "Nueva clase creada", time: "Hace 1 hora" },
];

export default function RecentActivity() {
    return (
        <div className="col-lg-4">
            <div className="custom-card p-4 h-100">
                <h4 className="fw-bold mb-4">Actividad reciente</h4>
                    {activities.map(({ label, time }, i) => (
                        <div key={i} className={i < activities.length - 1 ? "mb-3" : ""}>
                            <p className="mb-1 fw-semibold">{label}</p>
                            <small className="text-secondary">{time}</small>
                        </div>
                    ))}
            </div>
        </div>
    );
}