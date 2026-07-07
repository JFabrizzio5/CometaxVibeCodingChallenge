export default function DashboardTable() {
    return (
        <div className="custom-card p-4 mt-5">
            <h4 className="mb-4">
                Actividades recientes
            </h4>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Acción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cesar</td>
                        <td>Actualizó dashboard</td>
                        <td>
                            <span className="badge bg-success">
                                Completado
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Maria</td>
                        <td>Creó reporte</td>
                        <td>
                            <span className="badge bg-warning">
                                Pendiente
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}