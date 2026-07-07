const bars = [
  { height: "30%" },
  { height: "45%" },
  { height: "70%" },
  { height: "85%" },
  { height: "95%" },
];

export default function MonthlyPerformance() {
    return (
        <div className="col-lg-8">
            <div className="custom-card p-4">
                <h4 className="fw-bold mb-4">Rendimiento mensual</h4>
                <div className="chart-placeholder">
                    <div className="chart-bars">
                        {bars.map((bar, i) => (
                        <div key={i} className="chart-bar" style={{ height: bar.height }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}