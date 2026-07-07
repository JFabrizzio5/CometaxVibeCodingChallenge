import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section className="login-wrapper">
      <div className="login-card custom-card">
        <div className="text-center mb-4">
          <h1 className="fw-bold">SportFlow</h1>
          <p className="text-secondary">Inicia sesión en tu cuenta</p>
        </div>

        <div className="mb-4">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="correo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Recordarme
            </label>
          </div>
          <a href="#" className="text-decoration-none">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          className="btn btn-primary custom-btn w-100"
        >
          Iniciar sesión
        </button>
      </div>
    </section>
  );
}