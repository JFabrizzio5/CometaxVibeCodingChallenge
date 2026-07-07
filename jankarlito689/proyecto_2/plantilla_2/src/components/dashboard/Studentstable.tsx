const students = [
    { name: "Juan Pérez", discipline: "Fútbol", status: "Activo", badge: "bg-success" },
    { name: "María López", discipline: "Natación", status: "Pendiente", badge: "bg-warning" },
    { name: "Carlos Ruiz", discipline: "Padel", status: "Activo", badge: "bg-primary" },
];

export default function StudentsTable() {
  return (
    <div className="custom-card p-4 mt-4">
      <h4 className="fw-bold mb-4">Listado de alumnos</h4>
      <div className="table-responsive table-dark-custom">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Disciplina</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({ name, discipline, status, badge }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{discipline}</td>
                <td>
                  <span className={`badge ${badge}`}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}