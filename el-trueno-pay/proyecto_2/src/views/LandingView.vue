<template>
  <div class="landing">
    <div class="grid-overlay"></div>
    <div class="hero-glow"></div>

    <nav class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="#">
          <div class="brand-icon">P</div>
          <span>PeopleOS</span>
        </a>
        <div class="nav-links">
          <a href="#features">Producto</a>
          <a href="#pricing">Precios</a>
          <a href="#">Clientes</a>
          <a href="#">Docs</a>
        </div>
        <div class="nav-actions">
          <RouterLink to="/login" class="nav-login">Iniciar sesión</RouterLink>
          <RouterLink to="/admin" class="btn-primary nav-cta">Comenzar gratis</RouterLink>
        </div>
      </div>
    </nav>

    <main>
      <section class="hero">
        <div class="hero-inner">
          <div ref="badge" class="badge">
            <span class="badge-dot"></span>
            Nuevo — Onboarding automatizado con IA
          </div>
          <h1 ref="title" class="hero-title">
            Gestiona tu equipo<br/>
            <span class="gradient-text">sin fricciones.</span>
          </h1>
          <p ref="subtitle" class="hero-subtitle">
            PeopleOS centraliza contrataciones, nómina, desempeño y cultura en una sola plataforma.
            Diseñada para equipos que escalan rápido y no quieren perder tiempo en burocracia.
          </p>
          <div ref="ctas" class="hero-ctas">
            <RouterLink to="/admin" class="btn-primary btn-lg">Ver demo interactiva →</RouterLink>
            <a href="#features" class="btn-ghost btn-lg">Ver cómo funciona</a>
          </div>

          <div ref="preview" class="preview-wrap">
            <div class="preview-glow"></div>
            <div class="preview-card">
              <div class="preview-bar">
                <div class="browser-dots">
                  <span class="dot dot-red"></span>
                  <span class="dot dot-yellow"></span>
                  <span class="dot dot-green"></span>
                </div>
                <span class="browser-url">peopleos.app/admin</span>
              </div>
              <div class="kpi-grid">
                <div v-for="k in previewKpis" :key="k.label" class="kpi-item">
                  <p class="kpi-label">{{ k.label }}</p>
                  <p class="kpi-value" :class="k.color">{{ k.value }}</p>
                </div>
              </div>
              <div class="preview-cols">
                <div class="preview-box">
                  <p class="box-title">Incorporaciones recientes</p>
                  <div class="emp-list">
                    <div v-for="e in previewEmployees" :key="e.name" class="emp-row">
                      <div class="emp-avatar" :class="e.bg">{{ e.initials }}</div>
                      <div class="emp-info">
                        <p class="emp-name">{{ e.name }}</p>
                        <p class="emp-role">{{ e.role }}</p>
                      </div>
                      <span class="emp-badge">Nuevo</span>
                    </div>
                  </div>
                </div>
                <div class="preview-box">
                  <p class="box-title">Distribución por área</p>
                  <div class="dept-list">
                    <div v-for="d in previewDepts" :key="d.name" class="dept-row">
                      <div class="dept-header">
                        <span class="dept-name">{{ d.name }}</span>
                        <span class="dept-pct">{{ d.pct }}%</span>
                      </div>
                      <div class="dept-bar-track">
                        <div class="dept-bar" :class="d.color" :style="`width:${d.pct}%`"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="logos-band">
        <div class="container">
          <p class="logos-label">Confiado por equipos de alto rendimiento</p>
          <div class="logos-row">
            <span v-for="logo in logos" :key="logo">{{ logo }}</span>
          </div>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Plataforma completa</p>
            <h2 class="section-title">Todo lo que necesita tu equipo de HR</h2>
            <p class="section-sub">Desde el primer día hasta el offboarding, PeopleOS cubre cada etapa del ciclo de vida del empleado con herramientas inteligentes.</p>
          </div>
          <div class="features-grid">
            <div v-for="f in features" :key="f.title" class="feature-card">
              <div class="feature-icon">{{ f.icon }}</div>
              <h3>{{ f.title }}</h3>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="section">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Planes transparentes</p>
            <h2 class="section-title">Crezcan juntos, paguen lo justo</h2>
            <p class="section-sub">Escalamos con tu empresa. Desde el primer empleado hasta el equipo global.</p>
          </div>
          <div class="pricing-grid">
            <div v-for="p in pricing" :key="p.name" class="pricing-card" :class="{ 'pricing-featured': p.featured }">
              <div v-if="p.featured" class="popular-badge">Más popular</div>
              <h3>{{ p.name }}</h3>
              <p class="pricing-desc">{{ p.desc }}</p>
              <div class="pricing-price">
                <span class="price-num">${{ p.price }}</span>
                <span class="price-period" v-if="p.price !== 'Custom'">/mes</span>
              </div>
              <ul class="pricing-features">
                <li v-for="feat in p.features" :key="feat">
                  <span class="check">✓</span> {{ feat }}
                </li>
              </ul>
              <RouterLink :to="p.cta" class="pricing-btn" :class="p.featured ? 'btn-primary' : 'btn-ghost'">
                {{ p.ctaText }}
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="testimonials-layout">
            <div class="testimonials-left">
              <h2 class="section-title" style="text-align:left">Diseñado para<br/><span class="gradient-text">líderes modernos.</span></h2>
              <p class="section-sub" style="text-align:left; max-width:340px">Súmate a cientos de empresas que han optimizado su cultura organizacional y reducido la rotación en un 30%.</p>
              <div class="avatar-row">
                <div class="avatar-stack">
                  <div v-for="i in 4" :key="i" class="avatar-item">U{{ i }}</div>
                </div>
                <p class="avatar-label">+500 equipos confían en nosotros</p>
              </div>
            </div>
            <div class="testimonials-right">
              <div v-for="t in testimonials" :key="t.name" class="testimonial-card">
                <div class="stars">★★★★★</div>
                <p class="t-quote">"{{ t.quote }}"</p>
                <div class="t-author">
                  <div class="t-avatar">{{ t.initials }}</div>
                  <div>
                    <p class="t-name">{{ t.name }}</p>
                    <p class="t-role">{{ t.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="cta-final">
            <p class="section-tag">Empieza hoy</p>
            <h2>Tu equipo merece mejores herramientas</h2>
            <p>Sin tarjeta de crédito. Setup en 5 minutos. Empieza a escalar tu cultura hoy mismo.</p>
            <RouterLink to="/login" class="btn-primary btn-lg">Crear cuenta gratis ahora →</RouterLink>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="footer-inner">
            <div class="footer-brand">
              <div class="footer-logo">
                <div class="brand-icon brand-icon-sm">P</div>
                <span>PeopleOS</span>
              </div>
              <p>La plataforma de gestión de personas más avanzada para equipos modernos.</p>
            </div>
            <div class="footer-links">
              <div class="footer-col">
                <span class="footer-col-title">Producto</span>
                <a href="#">Características</a>
                <a href="#">Precios</a>
              </div>
              <div class="footer-col">
                <span class="footer-col-title">Compañía</span>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
              </div>
            </div>
          </div>
          <div class="footer-copy">
            <p>© 2026 PeopleOS Inc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const badge = ref(null), title = ref(null), subtitle = ref(null), ctas = ref(null), preview = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(badge.value,    { opacity:0, y:16 }, { opacity:1, y:0, duration:.5, delay:.1 })
    .fromTo(title.value,    { opacity:0, y:20 }, { opacity:1, y:0, duration:.6 }, '-=.3')
    .fromTo(subtitle.value, { opacity:0, y:16 }, { opacity:1, y:0, duration:.5 }, '-=.35')
    .fromTo(ctas.value,     { opacity:0, y:16 }, { opacity:1, y:0, duration:.5 }, '-=.3')
    .fromTo(preview.value,  { opacity:0, y:24 }, { opacity:1, y:0, duration:.7 }, '-=.2')
})

const previewKpis = [
  { label:'Empleados',       value:'248', color:'c-white'  },
  { label:'Nuevos este mes', value:'+12', color:'c-teal'   },
  { label:'Retención',       value:'94%', color:'c-cyan'   },
  { label:'NPS empleados',   value:'72',  color:'c-violet' },
]
const previewEmployees = [
  { name:'Ana García',  role:'Diseñadora UX',   initials:'AG', bg:'av-violet' },
  { name:'Carlos Ruiz', role:'Ing. Backend',    initials:'CR', bg:'av-cyan'   },
  { name:'María López', role:'Product Manager', initials:'ML', bg:'av-teal'   },
]
const previewDepts = [
  { name:'Ingeniería',  pct:42, color:'bar-teal'   },
  { name:'Diseño',      pct:18, color:'bar-cyan'   },
  { name:'Ventas',      pct:25, color:'bar-violet' },
  { name:'Operaciones', pct:15, color:'bar-amber'  },
]
const logos = ['Acme Corp','Vercel','Linear','Notion','Stripe','Figma']
const features = [
  { icon:'👥', title:'Gestión de empleados',    desc:'Perfiles completos, historial, documentos y organigrama en un solo lugar.' },
  { icon:'🚀', title:'Onboarding automatizado', desc:'Flujos de bienvenida, firma de documentos y accesos automáticos.' },
  { icon:'📊', title:'Analytics de equipo',     desc:'Métricas de retención, rendimiento y satisfacción en tiempo real.' },
  { icon:'💰', title:'Gestión de nómina',       desc:'Cálculo automático, historial de pagos y reportes fiscales.' },
  { icon:'🎯', title:'OKRs y desempeño',        desc:'Define objetivos, da feedback continuo y evalúa el desempeño.' },
  { icon:'📅', title:'Tiempo y asistencia',     desc:'Control de horarios, vacaciones y ausencias con calendario integrado.' },
]
const pricing = [
  { name:'Básico',      desc:'Ideal para equipos pequeños.',   price:'0',      features:['Hasta 5 empleados','Gestión básica de perfiles','Onboarding estándar','Soporte por email'],                                cta:'/login', ctaText:'Empezar gratis',      featured:false },
  { name:'Profesional', desc:'Para empresas en crecimiento.',  price:'49',     features:['Hasta 50 empleados','Analytics avanzados','Automatización de nómina','Soporte prioritario','OKRs y Desempeño'],           cta:'/login', ctaText:'Probar Profesional',  featured:true  },
  { name:'Enterprise',  desc:'Solución para corporaciones.',   price:'Custom', features:['Empleados ilimitados','SSO y Seguridad avanzada','Manager dedicado','SLA garantizado'],                                    cta:'/login', ctaText:'Contactar ventas',    featured:false },
]
const testimonials = [
  { name:'Santi Pérez', role:'CEO en InnovaTech',     initials:'SP', quote:'PeopleOS transformó la forma en que gestionamos nuestro talento. La automatización del onboarding nos ahorró horas de trabajo manual.' },
  { name:'Laura M.',    role:'HR Director en ScaleUp', initials:'LM', quote:'La visibilidad que tenemos ahora sobre el desempeño es increíble. Es la primera herramienta que realmente entiende a HR.' },
]
</script>