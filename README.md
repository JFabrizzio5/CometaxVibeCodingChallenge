# 🚀 CometaX Vibe Coding Challenge — Modalidad 2

> Dos plantillas frontend premium tipo SaaS desarrolladas con Vue 3 + Vite + Tailwind CSS. Diseño de nivel empresarial, responsive real, Docker-listo y desplegadas en GitHub Pages.

**Desarrollado por:** Truenopay123  
**Challenge:** CometaX Vibe Coding Challenge — Modalidad 2 (Framework Moderno)  
**Stack principal:** Vue 3 · Vite · Tailwind CSS · Vue Router · GSAP

---

## 📦 Proyectos entregados

| # | Nombre | Temática | Repo | Demo |
|---|--------|----------|------|------|
| 1 | **NovaPay** | Fintech / Pagos | [Truenopay123/fintech-dashboard](https://github.com/Truenopay123/fintech-dashboard) | [Ver demo](https://truenopay123.github.io/fintech-dashboard/) |
| 2 | **PeopleOS** | HR / Gestión de equipos | [Truenopay123/rh-saas](https://github.com/Truenopay123/rh-saas) | [Ver demo](https://truenopay123.github.io/rh-saas/) |

---

## 💠 Proyecto 1 — NovaPay (Fintech Dashboard)

**Repositorio:** https://github.com/Truenopay123/fintech-dashboard  
**Demo en vivo:** https://truenopay123.github.io/fintech-dashboard/

### Descripción
Plantilla frontend para sistemas de pagos y finanzas empresariales. Estética cyberpunk/futurista inspirada en interfaces de defensa financiera. Fondo negro puro con acento ámbar/naranja, tipografía Rajdhani + JetBrains Mono, animaciones WebGL y GSAP.

### Pantallas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing Page con hero animado y WebGL |
| `/login` | Pantalla de autenticación |
| `/dashboard` | Panel principal con KPIs y transacciones |
| `/transacciones` | CRM / Tabla de movimientos con filtros |
| `/reportes` | Reportes con gráficas de barras |
| `/perfil` | Perfil de usuario + Cerrar sesión |

### Características de diseño
- Fondo negro puro `#000000` con efecto grid
- Acento ámbar/naranja
- Tipografía **Rajdhani** + **JetBrains Mono**
- Fondo animado con **WebGL** (laser beam)
- Líneas SVG animadas
- Animaciones de entrada con **GSAP**
- Corner accents en cards
- Glow cards con efecto flashlight al hover
- Menú hamburguesa responsive en móvil

### Cómo correr localmente

```bash
git clone https://github.com/Truenopay123/fintech-dashboard.git
cd fintech-dashboard
npm install
npm run dev
```

### Cómo correr con Docker

```bash
docker build -t novapay-dashboard .
docker run -p 8080:80 novapay-dashboard
```

Abre http://localhost:8080

---

## 🟢 Proyecto 2 — PeopleOS (HR SaaS)

**Repositorio:** https://github.com/Truenopay123/rh-saas  
**Demo en vivo:** https://truenopay123.github.io/rh-saas/

### Descripción
Plantilla frontend para gestión de recursos humanos empresariales. Estética SaaS corporativa moderna inspirada en Linear, Vercel y Notion. Fondo gris oscuro azulado con acento verde esmeralda, tipografía Inter + DM Mono, glassmorphism y animaciones suaves.

### Pantallas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing Page con preview del dashboard |
| `/login` | Login con opción de Google y email |
| `/admin` | Admin Panel con KPIs, actividad y tareas |
| `/empleados` | CRM / Grid de empleados con filtros |
| `/nuevo-empleado` | Formulario multi-step de contratación |
| `/perfil` | Perfil + preferencias + Cerrar sesión |

### Características de diseño
- Fondo: Azul marino profundo `#020617`
- Acento: Teal `#2dd4bf` (complementado con Cyan y Violeta)
- Tipografía: Inter + DM Mono
- Animaciones: GSAP (entradas) + CSS nativo (interacciones)
- Glassmorphism: Efectos de desenfoque (blur) en navegación y cards
- Detalles: Grid overlay, resplandores (glow) y gradientes lineales
- Estética: SaaS corporativo moderno, modo oscuro premium

### Cómo correr localmente

```bash
git clone https://github.com/Truenopay123/rh-saas.git
cd rh-saas
npm install
npm run dev
```

### Cómo correr con Docker

```bash
docker build -t peopleos-hr .
docker run -p 8080:80 peopleos-hr
```

Abre http://localhost:8080

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Vue 3 | 3.x | Framework principal |
| Vite | 8.x | Bundler y dev server |
| Vue Router | 4.x | Navegación SPA |
| Tailwind CSS | 4.x | Estilos utilitarios |
| GSAP | 3.x | Animaciones de entrada |
| WebGL | — | Fondo animado (proyecto 1) |

---

## 📋 Requisitos cumplidos

| Requisito | Proyecto 1 | Proyecto 2 |
|-----------|-----------|-----------|
| Landing page | ✅ | ✅ |
| CRM / Dashboard / Admin panel | ✅ | ✅ |
| Formulario | ✅ | ✅ |
| Login | ✅ | ✅ |
| Perfil / Logout | ✅ | ✅ |
| Máximo 6 pantallas | ✅ | ✅ |
| Diseño premium tipo SaaS | ✅ | ✅ |
| Responsive real | ✅ | ✅ |
| Mock JSON | ✅ | ✅ |
| Docker | ✅ | ✅ |
| Compilación correcta | ✅ | ✅ |
| README detallado | ✅ | ✅ |
| GitHub Pages deploy | ✅ | ✅ |

---

## 🌐 Despliegue en GitHub Pages

Ambos proyectos usan **GitHub Actions** para CI/CD automático. Cada push a `main` dispara un workflow que:

1. Instala dependencias con `npm install`
2. Compila el proyecto con `npm run build`
3. Sube el directorio `/dist` como artefacto de Pages
4. Despliega automáticamente en GitHub Pages

### Configuración clave en `vite.config.js`

```js
// Proyecto 1
base: '/fintech-dashboard/'

// Proyecto 2
base: '/rh-saas/'
```

Esta configuración es necesaria para que los assets (JS, CSS) se resuelvan correctamente bajo el subdirectorio de GitHub Pages.

### Workflow utilizado (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install && npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

*Desarrollado para CometaX Vibe Coding Challenge — Modalidad 2 · 2026*
