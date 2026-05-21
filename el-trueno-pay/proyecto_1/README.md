# 💠 NovaPay — Fintech Dashboard Template

> Plantilla frontend premium tipo SaaS para sistemas de pagos y finanzas empresariales. Construida con Vue 3 + Vite + Tailwind CSS. Estética cyberpunk/futurista inspirada en interfaces de defensa financiera.

---

## 🖥️ Pantallas incluidas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing Page |
| `/login` | Login / Auth |
| `/dashboard` | Dashboard / KPIs |
| `/transacciones` | CRM / Tabla de movimientos |
| `/reportes` | Reportes y gráficas |
| `/perfil` | Perfil + Cerrar sesión |

---

## 🚀 Arrancar en local

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/JFabrizzio5/CometaxVibeCodingChallenge.git
cd CometaxVibeCodingChallenge/el-trueno-pay/proyecto_1

# 2. Instalar dependencias
npm install

# 3. Arrancar servidor de desarrollo
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

```bash
# 1. Construir la imagen
docker build -t novapay-dashboard .

# 2. Correr el contenedor
docker run -p 8080:80 novapay-dashboard
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
| WebGL | Fondo animado |
| JetBrains Mono | Tipografía monospace |
| Rajdhani | Tipografía display |

---

## 📁 Estructura del proyecto

proyecto_1/
├── src/
│   ├── views/
│   │   ├── LandingView.vue
│   │   ├── LoginView.vue
│   │   ├── DashboardView.vue
│   │   ├── TransaccionesView.vue
│   │   ├── ReportesView.vue
│   │   └── PerfilView.vue
│   ├── router/
│   │   └── index.js
│   ├── assets/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── Dockerfile
├── nginx.conf
├── vite.config.js
└── README.md


---

## 📱 Responsive

La plantilla es completamente responsive:
- ✅ Mobile (320px+) — menú hamburguesa
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

---

## 🎨 Diseño

- Fondo negro puro `#000000`
- Acento ámbar/naranja
- Tipografía Rajdhani + JetBrains Mono
- Animaciones GSAP al cargar
- Fondo WebGL animado
- Corner accents en cards
- Glow cards con efecto flashlight
- Líneas SVG animadas

---

*Desarrollado para CometaX Vibe Coding Challenge — Modalidad 2*
