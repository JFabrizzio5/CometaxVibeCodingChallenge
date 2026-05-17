export default function Hero() {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-gradient">
					<div className="row align-items-center g-5">
						<div className="col-lg-6">
							<span className="badge bg-primary mb-4">
								SaaS Deportivo Premium
							</span>

							<h1 className="display-3 fw-bold mb-4">
								Gestiona tu academia deportiva en un solo lugar
							</h1>

							<p className="lead text-light opacity-75 mb-4">
								Administra alumnos, pagos, horarios y entrenadores
								con una experiencia moderna y profesional.
							</p>

							<div className="d-flex gap-3 flex-wrap">
								<a className="btn btn-primary custom-btn">
									Comenzar
								</a>

								<a className="btn btn-outline-light custom-btn">
									Ver demo
								</a>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="custom-card p-4">
								<div className="row g-4">
									<div className="col-6">
										<div className="custom-card p-4 text-center">
											<h2 className="fw-bold text-primary">
												+2,500
											</h2>
											<p className="mb-0 text-secondary">
												Alumnos
											</p>
										</div>
									</div>

									<div className="col-6">
										<div className="custom-card p-4 text-center">
											<h2 className="fw-bold text-success">
												98%
											</h2>
											<p className="mb-0 text-secondary">
												Asistencia
											</p>
										</div>
									</div>

									<div className="col-12">
										<div className="chart-placeholder">
											<div className="chart-bars">
												<div className="chart-bar" style={{ height: "40%" }}></div>
												<div className="chart-bar" style={{ height: "65%" }}></div>
												<div className="chart-bar" style={{ height: "85%" }}></div>
												<div className="chart-bar" style={{ height: "55%" }}></div>
												<div className="chart-bar" style={{ height: "95%" }}></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}