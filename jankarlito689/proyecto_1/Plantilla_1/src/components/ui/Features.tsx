export default function Features() {

    const items = [
        {
            title: "Analytics",
            text: "Métricas avanzadas en tiempo real."
        },
        {
            title: "Seguridad",
            text: "Protección de nivel empresarial."
        },
        {
            title: "Automatización",
            text: "Optimiza procesos rápidamente."
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold">
                        Características principales
                    </h2>
                </div>

                <div className="row g-4">
                    {items.map((item) => (
                        <div className="col-md-4">
                            <div className="custom-card p-4 h-100">
                                <h4 className="fw-bold mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-secondary">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}