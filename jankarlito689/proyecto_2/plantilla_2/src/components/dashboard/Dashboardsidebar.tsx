const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Usuarios", href: "#" },
    { label: "Entrenadores", href: "#" },
    { label: "Reportes", href: "#" },
];

export default function DashboardSidebar() {
    return (
        <div className="col-lg-2 dashboard-sidebar p-4">
            <h4 className="fw-bold mb-4">SportFlow</h4>
            {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="sidebar-link">
                {label}
                </a>
            ))}
        </div>
    );
}