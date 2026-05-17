export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark glass sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    SaaSify
                </a>
                <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/formulario">Formulario</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/perfil">Perfil</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}