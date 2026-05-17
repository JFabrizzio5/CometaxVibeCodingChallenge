export default function Navbar() {
    return (
        <header className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg premium-navbar">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand brand-logo" href="/">
                        <div className="logo-circle">
                        S
                        </div>
                        <span>SaaSify</span>
                    </a>

                    {/* Mobile button */}
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav mx-auto gap-lg-4">
                            <li className="nav-item">
                                <a className="nav-link custom-link active-link" href="/">
                                    Inicio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link custom-link" href="/dashboard">
                                    Dashboard
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link custom-link" href="/formulario">
                                    Formulario
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link custom-link" href="/login">
                                    Login
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link custom-link" href="/perfil">
                                    Perfil
                                </a>
                            </li>
                        </ul>

                        {/* Right buttons */}
                        <div className="d-flex align-items-center gap-3 mt-4 mt-lg-0">

                            <button className="btn btn-login">
                                Sign in
                            </button>
                            <button className="btn btn-gradient">
                                Get Started
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}