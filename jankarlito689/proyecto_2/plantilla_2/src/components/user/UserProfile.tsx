export default function UserProfile() {
	return (
		<div className="custom-card p-5 text-center">
			<img
				src="https://i.pravatar.cc/300"
				className="profile-avatar mb-4"
				alt="avatar"
			/>

			<h2 className="fw-bold">
				Carlos Mendoza
			</h2>

			<p className="text-secondary">
				admin@sportflow.com
			</p>

			<span className="badge bg-primary mb-4">
				Administrador
			</span>

			<div className="d-flex justify-content-center gap-3 flex-wrap">
				<button className="btn btn-outline-light custom-btn">
					Editar perfil
				</button>

				<button className="btn btn-danger custom-btn">
					Cerrar sesión
				</button>
			</div>
		</div>
	);
}