export default function DashboardStats() {

    const stats = [
        {
            title: "Ventas",
            value: "$24,000"
        },
        {
            title: "Usuarios",
            value: "1,245"
        },
        {
            title: "Ingresos",
            value: "$12,450"
        }
    ];

    return (
        <div className="row g-4">
            {stats.map((item) => (
                <div className="col-md-4">
                    <div className="stat-card">
                        <h5>{item.title}</h5>
                        <h2 className="fw-bold mt-3">
                            {item.value}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}