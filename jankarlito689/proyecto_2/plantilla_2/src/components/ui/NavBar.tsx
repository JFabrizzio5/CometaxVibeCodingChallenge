export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg custom-navbar sticky-top">
			<div className="container">
				<a
					className="navbar-brand text-white fw-bold"
					href="/"
				>
					SportFlow
				</a>

				<button
					className="navbar-toggler bg-light"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbar"
				>
					<ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
						<li className="nav-item">
							<a className="nav-link text-white" href="/">
								Inicio
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="/dashboard">
								Dashboard
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="/formulario">
								Formulario
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="/login">
								Login
							</a>
						</li>

						<li className="nav-item">
							<a className="btn btn-primary custom-btn" href="/perfil">
								Perfil
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}