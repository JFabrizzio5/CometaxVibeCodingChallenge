export default function Hero() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        <span className="badge bg-primary mb-4">
                            Plataforma SaaS moderna
                        </span>
                        <h1 className="display-3 fw-bold mb-4">
                            Gestiona tu negocio de forma
                            <span className="gradient-text"> inteligente</span>
                        </h1>
                        <p className="text-secondary fs-5 mb-4">
                            Dashboard moderno, estadísticas avanzadas
                            y una experiencia premium.
                        </p>

                        <div className="d-flex gap-3">
                            <button className="btn-primary-custom">
                                Comenzar
                            </button>
                            <button className="btn btn-outline-light">
                                Demo
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="custom-card p-4">
                            <img
                                src="https://placehold.co/800x500"
                                className="img-fluid rounded-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}