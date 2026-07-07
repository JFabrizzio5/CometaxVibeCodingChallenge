export default function DashboardStats() {
	return (
		<div className="row g-4">
			<div className="col-md-4">
				<div className="custom-card kpi-card">
					<p className="text-secondary mb-2">Ingresos</p>
					<h2 className="fw-bold">$45,000</h2>
				</div>
			</div>

			<div className="col-md-4">
				<div className="custom-card kpi-card">
					<p className="text-secondary mb-2">Nuevos alumnos</p>
					<h2 className="fw-bold">320</h2>
				</div>
			</div>

			<div className="col-md-4">
				<div className="custom-card kpi-card">
					<p className="text-secondary mb-2">Entrenadores</p>
					<h2 className="fw-bold">24</h2>
				</div>
			</div>
		</div>
	);
}