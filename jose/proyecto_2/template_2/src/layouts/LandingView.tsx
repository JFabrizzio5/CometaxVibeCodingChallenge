import { Button, Badge, Card } from '../components';
import {
  Zap,
  Globe,
  Shield,
  Mail,
  Leaf,
  Star,
  MapPin,
  Phone
} from 'lucide-react';

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.7-3.3-.2-6.3-1.7-8.3-4.2-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 3-1.5 1.2-3.4 1.8-5.3 1.8H2c1.9 1.2 4.1 1.9 6.4 1.9 7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.5 1.5-1.2 2-2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.2c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.8V24h-4V8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

export const LandingView = ({ onLogin }: any) => (
  <div className="min-h-screen bg-white font-sans selection:bg-sky-100">
    {/* Navbar */}
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-100">
          <Leaf size={22} fill="currentColor" />
        </div>
        <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase">ECO<span className="text-emerald-500">SYSTEM</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
        <a href="#empresa" className="hover:text-sky-600 transition-colors">Compañía</a>
        <a href="#servicios" className="hover:text-sky-600 transition-colors">Servicios</a>
        <a href="#opiniones" className="hover:text-sky-600 transition-colors">Opiniones</a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button onClick={onLogin} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-sky-600 transition-colors">Entrar</button>
        <Button onClick={onLogin} variant="success" className="text-[10px] sm:text-xs uppercase tracking-widest px-3 sm:px-5">Empezar Gratis</Button>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="relative isolate px-4 sm:px-6 py-16 sm:py-20 md:py-32 max-w-7xl mx-auto text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Gradient blob 1 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-400/10 rounded-full blur-3xl" />

        {/* Gradient blob 2 */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />

        {/* Gradient blob 3 */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-300/10 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-none">
        Diseña el futuro <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500">más brillante.</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-medium px-2">
        La herramienta de gestión más fluida, con colores que inspiran calma y productividad. Construido para la nueva era digital.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
        <Button onClick={onLogin} className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 hover:cursor-pointer">Ver Planes</Button>
        <Button variant="secondary" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 hover:cursor-pointer">Saber más</Button>
      </div>
    </section>

    {/* Información General / Empresa */}
    <section id="empresa" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Badge variant="info">Nuestra Historia</Badge>
          <h2 className="text-4xl font-black tracking-tight text-slate-900">Una visión centrada en el impacto positivo.</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Nacimos con el propósito de simplificar la complejidad técnica. Creemos que el software no solo debe ser potente, sino también hermoso y responsable.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <p className="text-4xl font-black text-sky-600">+10k</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Usuarios Activos</p>
            </div>
            <div>
              <p className="text-4xl font-black text-emerald-500">99.9%</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Uptime Garantizado</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-sky-50 h-64 rounded-3xl p-8 flex flex-col justify-end">
            <Globe className="text-sky-500 mb-4" size={32} />
            <h4 className="font-black text-slate-900">Global</h4>
          </div>
          <div className="bg-emerald-50 h-64 rounded-3xl p-8 translate-y-8 flex flex-col justify-end">
            <Zap className="text-emerald-500 mb-4" size={32} />
            <h4 className="font-black text-slate-900">Rápido</h4>
          </div>
        </div>
      </div>
    </section>

    {/* Servicios */}
    <section id="servicios" className="py-24 bg-slate-50/50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge>Servicios Premium</Badge>
          <h2 className="text-4xl font-black tracking-tight text-slate-900">Soluciones para el mañana.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Automatización Inteligente', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50', desc: 'Flujos de trabajo que aprenden de tus decisiones diarias.' },
            { title: 'Seguridad Cuántica', icon: Shield, color: 'text-sky-500', bg: 'bg-sky-50', desc: 'Protección avanzada contra las amenazas más modernas.' },
            { title: 'Gestión Multi-Nube', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-50', desc: 'Conecta todos tus servicios en una sola interfaz fluida.' },
          ].map((s, i) => (
            <Card key={i} className="border-none shadow-md hover:-translate-y-2">
              <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-6`}>
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Opiniones de Usuarios */}
    <section id="opiniones" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <Badge variant="warning">Testimonios</Badge>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 mt-4 mb-6">Lo que dicen nuestros líderes.</h2>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-amber-400 text-amber-400" />)}
            <span className="ml-2 font-black text-slate-900">4.9/5 Calificación</span>
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-6 animate-in slide-in-from-right duration-1000 w-full">
          {[
            { name: 'David Miller', role: 'CTO @ Innova', text: 'Ecosystem no es solo una herramienta, es una extensión de nuestra creatividad diaria.', avatar: 'https://i.pravatar.cc/150?u=david' },
            { name: 'Sarah Chen', role: 'Product Lead', text: 'La fluidez de la interfaz es algo que no había visto en años de experiencia SaaS.', avatar: 'https://i.pravatar.cc/150?u=sarah' }
          ].map((t, i) => (
            <div
              key={i}
              className="w-full md:min-w-[320px] bg-white border border-slate-100 p-6 sm:p-8 rounded-[32px] shadow-sm space-y-6"
            >
              <p className="text-lg font-medium text-slate-600 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-sky-100" alt={t.name} />
                <div>
                  <h5 className="font-black text-slate-900">{t.name}</h5>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-slate-900 text-white pt-16 sm:pt-20 pb-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sky-600">
                <Leaf size={22} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">ECO<span className="text-emerald-400">SYSTEM</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Empoderando equipos digitales con herramientas que inspiran y protegen el futuro.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Plataforma</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Contacto</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li className="flex items-center gap-3"><Mail size={16} className="text-emerald-400" /> hello@ecosystem.io</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-emerald-400" /> +34 910 234 567</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-emerald-400" /> Madrid, España</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-all duration-300">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <LinkedInIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 transition-all duration-300">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
            © 2024 Ecosystem Inc. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);