export default function Form() {
	return (
		<div className="custom-card p-5">
			<h2 className="fw-bold mb-4">
				Formulario de contacto
			</h2>

			<div className="row g-4">
				<div className="col-md-6">
					<label className="form-label">Nombre</label>

					<input
						type="text"
						className="form-control"
						placeholder="Ingresa tu nombre"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Correo</label>

					<input
						type="email"
						className="form-control"
						placeholder="correo@email.com"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Disciplina</label>

					<select className="form-select">
						<option>Fútbol</option>
						<option>Natación</option>
						<option>Crossfit</option>
						<option>Padel</option>
					</select>
				</div>

				<div className="col-md-6">
					<label className="form-label">Nivel</label>

					<select className="form-select">
						<option>Principiante</option>
						<option>Intermedio</option>
						<option>Avanzado</option>
					</select>
				</div>

				<div className="col-12">
					<label className="form-label d-block mb-3">
						Preferencias
					</label>

					<div className="d-flex flex-wrap gap-4">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">
								Clases matutinas
							</label>
						</div>

						<div className="form-check">
							<input className="form-check-input" type="checkbox" />
							<label className="form-check-label">
								Entrenamiento personalizado
							</label>
						</div>
					</div>
				</div>

				<div className="col-12">
					<label className="form-label">
						Comentarios
					</label>

					<textarea
						rows={5}
						className="form-control"
						placeholder="Escribe tus comentarios..."
					></textarea>
				</div>

				<div className="col-12">
					<div className="alert alert-success">
						Formulario enviado correctamente.
					</div>
				</div>

				<div className="col-12">
					<button className="btn btn-primary custom-btn">
						Enviar formulario
					</button>
				</div>
			</div>
		</div>
	);
}