import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import {
  Globe,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export const LandingPage = ({ setView }: any) => (
  <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
    <BackgroundAnimation />
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[100px]" />
    </div>

    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-6">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="text-indigo-500 fill-current" size={24} />
          <span className="font-bold text-xl">VibeSaaS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setView('login')} className="text-sm font-medium text-zinc-400 hover:text-white">Login</button>
          <Button onClick={() => setView('dashboard')}>Probar Gratis</Button>
        </div>
      </div>
    </nav>

    <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-indigo-400 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        Nuevo: Reportes Predictivos con IA
      </div>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent leading-tight mb-8">
        Analytics para la<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-700">próxima generación.</span>
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
        Diseñado para startups que no tienen tiempo que perder. La infraestructura de datos más rápida del mercado, ahora en tus manos.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => setView('login')} className="px-10 py-4 text-lg">Empezar ahora</Button>
        <Button variant="secondary" className="px-10 py-4 text-lg">Ver Demo</Button>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {[
          { icon: Shield, title: 'Privacidad Total', desc: 'Tus datos están encriptados de extremo a extremo.' },
          { icon: Globe, title: 'Global Edge', desc: 'Latencia mínima en cualquier parte del mundo.' },
          { icon: Zap, title: 'Auto-Scaling', desc: 'Nos adaptamos al volumen de tus eventos en tiempo real.' }
        ].map((f, i) => (
          <Card key={i}>
            <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center mb-4 border border-indigo-600/20">
              <f.icon className="text-indigo-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
          </Card>
        ))}
      </div>
      <section id="testimonials" className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Confían en nosotros</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Más de 500 startups ya están escalando sus ingresos con VibeSaaS.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Elena Bosch",
              role: "CTO @ FluxDesign",
              content: "La velocidad de carga de los reportes es simplemente ridícula. Ha cambiado nuestra forma de tomar decisiones.",
              avatar: "E"
            },
            {
              name: "Marc Vales",
              role: "Founder @ CloudScale",
              content: "La UI es tan limpia que mi equipo no necesitó capacitación. Literalmente empezamos a usarlo en 5 minutos.",
              avatar: "M"
            },
            {
              name: "Sofia Chen",
              role: "Head of Growth @ TechFlow",
              content: "Los insights de IA nos ayudaron a identificar una fuga de churn del 12% que no habíamos visto en meses.",
              avatar: "S"
            }
          ].map((t, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/30 hover:bg-zinc-900/50">
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed italic text-left">
                  "{t.content}"
                </p>
                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full rounded-xl h-auto z-10 border-t border-white/5 bg-black/50 backdrop-blur-md pt-20 pb-10">
        <div className="w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-white fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">VibeSaaS</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
                La plataforma de inteligencia de datos diseñada para la nueva era de productos digitales. Construye, escala y domina.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all">
                  <TwitterIcon size={18} />
                </a>
                <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all">
                  <LinkedinIcon size={18} />
                </a>
                <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all">
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Producto</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacidad</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Suscripción</h4>
              <p className="text-zinc-500 text-sm mb-4">Recibe los últimos insights de IA y data directamente en tu inbox.</p>
              <div className="flex gap-2 p-1 bg-zinc-950 border border-zinc-800 rounded-xl focus-within:border-indigo-500/50 transition-all">
                <input type="email" placeholder="Email" className="bg-transparent border-none text-sm text-white px-3 focus:outline-none flex-1" />
                <button className="bg-white text-black p-2 rounded-lg hover:bg-zinc-200 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[10px] text-zinc-600 mt-4">Al suscribirte aceptas nuestra política de datos.</p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-zinc-600">© 2024 VibeSaaS Inc. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Sistemas OK</span>
              </div>
              <Globe size={14} className="text-zinc-600" />
              <span className="text-[10px] font-bold text-zinc-500">ES / Global</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </div>
);