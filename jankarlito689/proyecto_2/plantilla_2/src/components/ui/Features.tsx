export default function Features() {
    return(
        <section className="container pb-5">
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="custom-card p-4 h-100">
                        <h3 className="fw-bold mb-3">
                            Gestión de alumnos
                        </h3>

                        <p className="text-secondary mb-0">
                            Administra estudiantes, horarios y membresías.
                        </p>
                    </div>
                </div>

			<div className="col-md-4">
				<div className="custom-card p-4 h-100">
					<h3 className="fw-bold mb-3">
						Control financiero
					</h3>

					<p className="text-secondary mb-0">
						Visualiza ingresos, pagos y reportes.
					</p>
				</div>
			</div>

			<div className="col-md-4">
				<div className="custom-card p-4 h-100">
					<h3 className="fw-bold mb-3">
						Analytics deportivos
					</h3>

					<p className="text-secondary mb-0">
						Obtén métricas y rendimiento de tu academia.
					</p>
				</div>
			</div>
		</div>
	</section>
    )
}