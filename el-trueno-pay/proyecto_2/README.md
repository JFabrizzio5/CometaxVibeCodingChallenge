# 🟢 PeopleOS — HR SaaS Template

> Plantilla frontend premium tipo SaaS para gestión de recursos humanos. Construida con Vue 3 + Vite + Tailwind CSS. Estética corporativa moderna inspirada en Linear y Vercel.

---

## 🖥️ Pantallas incluidas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing Page |
| `/login` | Login / Auth |
| `/admin` | Admin Panel / Dashboard |
| `/empleados` | Lista de empleados (CRM) |
| `/nuevo-empleado` | Formulario nuevo empleado |
| `/perfil` | Perfil + Cerrar sesión |

---

## 🚀 Arrancar en local

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

1. Clonar el repositorio

```bash
git clone https://github.com/Truenopay123/hr-saas.git
cd hr-saas
```

2. Instalar dependencias

```bash
npm install
```

3. Arrancar servidor de desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

---

## 🏗️ Compilar para producción

```bash
npm run build
```

Los archivos compilados quedan en `/dist`.

---

## 🐳 Correr con Docker

### Requisitos
- Docker instalado

### Pasos

1. Construir la imagen

```bash
docker build -t peopleos-hr .
```

2. Correr el contenedor

```bash
docker run -p 8080:80 peopleos-hr
```

Abre http://localhost:8080 en tu navegador.

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| Vue 3 | Framework principal |
| Vite 8 | Bundler y dev server |
| Vue Router | Navegación SPA |
| Tailwind CSS | Estilos utilitarios |
| GSAP | Animaciones de entrada |
| Inter | Tipografía principal |
| DM Mono | Tipografía monospace |

```bash

## 📁 Estructura del proyecto
hr-saas/
├── src/
│   ├── views/
│   │   ├── LandingView.vue
│   │   ├── LoginView.vue
│   │   ├── AdminView.vue
│   │   ├── EmpleadosView.vue
│   │   ├── NuevoEmpleadoView.vue
│   │   └── PerfilView.vue
│   ├── router/
│   │   └── index.js
│   ├── assets/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── nginx.conf
├── vite.config.js
└── README.md

```

## 📱 Responsive

- ✅ Mobile (320px+) — menú hamburguesa
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

---

## 🎨 Diseño

- Fondo: Azul marino profundo `#020617`
- Acento: Teal `#2dd4bf` (complementado con Cyan y Violeta)
- Tipografía: Inter + DM Mono
- Animaciones: GSAP (entradas) + CSS nativo (interacciones)
- Glassmorphism: Efectos de desenfoque (blur) en navegación y cards
- Detalles: Grid overlay, resplandores (glow) y gradientes lineales
- Estética: SaaS corporativo moderno, modo oscuro premium

---

*Desarrollado para CometaX Vibe Coding Challenge — Modalidad 2*