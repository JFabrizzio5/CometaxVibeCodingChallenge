<template>
  <div class="min-h-screen bg-black text-white relative overflow-x-hidden font-jakarta">
    <!-- Background Elements from pagina.html -->
    <svg class="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
          <filter id="noodle-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.15" result="blur"></feGaussianBlur>
              <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
          </filter>
      </defs>
      <path d="M 15,-10 C 15,30 85,70 85,110" fill="none" stroke="rgba(255,171,0,0.06)" stroke-width="0.1"></path>
      <path d="M 15,-10 C 15,30 85,70 85,110" fill="none" stroke="#FF6D00" stroke-width="0.2" filter="url(#noodle-glow)" stroke-dasharray="10 150">
          <animate attributeName="stroke-dashoffset" from="150" to="0" dur="6s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 85,-10 C 85,40 20,60 20,110" fill="none" stroke="rgba(255,171,0,0.06)" stroke-width="0.1"></path>
      <path d="M 85,-10 C 85,40 20,60 20,110" fill="none" stroke="#FFAB00" stroke-width="0.2" filter="url(#noodle-glow)" stroke-dasharray="15 150">
          <animate attributeName="stroke-dashoffset" from="150" to="0" dur="8.5s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50,-10 C 65,30 35,60 50,110" fill="none" stroke="rgba(255,171,0,0.06)" stroke-width="0.1"></path>
      <path d="M 50,-10 C 65,30 35,60 50,110" fill="none" stroke="#E65100" stroke-width="0.15" filter="url(#noodle-glow)" stroke-dasharray="5 100">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4.2s" repeatCount="indefinite"></animate>
      </path>
    </svg>
    <div class="fixed inset-0 z-[1] pointer-events-none opacity-20 mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    <div class="fixed inset-0 z-[1] pointer-events-none mix-blend-overlay opacity-30" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 171, 0, 0.1) 2px, rgba(255, 171, 0, 0.1) 4px); background-size: 100% 4px;"></div>
    <div class="fixed inset-0 z-[1] pointer-events-none" style="background: radial-gradient(circle at center, transparent 0%, #000000 90%);"></div>

    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-[40] bg-[#000000]/80 backdrop-blur-md border-b border-[#FFAB00]/10">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 border border-[#FFAB00] flex items-center justify-center relative overflow-hidden bg-[#5C3A0B]/50">
            <div class="w-1.5 h-1.5 bg-[#FF6D00] relative z-10 shadow-[0_0_8px_#FFAB00]"></div>
          </div>
          <span class="uppercase text-xl font-medium text-white tracking-widest font-jakarta">NovaPay</span>
        </div>
        <div class="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-orange-50 font-geist">
          <a href="#" class="hover:text-[#FFAB00] transition-colors">Producto</a>
          <a href="#" class="hover:text-[#FFAB00] transition-colors">Precios</a>
          <a href="#" class="hover:text-[#FFAB00] transition-colors">Empresa</a>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/login" class="text-xs font-mono uppercase tracking-widest hover:text-[#FFAB00] hidden sm:block text-orange-50 font-geist">
            Req_Auth
          </RouterLink>
          <RouterLink to="/dashboard" class="group relative flex items-center justify-center px-6 py-2.5 cursor-pointer overflow-hidden bg-[#1A2A3A]/40 border border-white/5 backdrop-blur-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
            <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFAB00] transition-all group-hover:w-[6px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
            <div class="absolute right-0 top-0 bottom-0 w-[3px] bg-[#FFAB00] transition-all group-hover:w-[6px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#FFAB00]/0 via-[#FFAB00]/10 to-[#FFAB00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span class="relative z-10 text-white font-mono text-xs tracking-widest uppercase flex items-center gap-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all font-geist">
              Comenzar
            </span>
          </RouterLink>
        </div>
      </div>
    </nav>

    <main class="pt-32 relative z-10">
      <!-- Hero -->
      <section class="min-h-[80vh] flex flex-col lg:flex-row max-w-7xl mx-auto px-6 relative items-center justify-center">
        <div class="lg:w-1/2 z-10 lg:pt-0 flex flex-col w-full pt-12 items-start">
          <div class="flex flex-col items-start mb-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[#FFAB00]/20 bg-[#5C3A0B]/30 backdrop-blur-sm mb-4">
              <span class="text-xs font-mono text-white uppercase tracking-widest bg-[#E65100]/50 px-2 py-0.5 border border-[#E65100]/80 font-geist">
                Actualización del Sistema
              </span>
              <span class="text-xs font-mono text-[#FFD54F] tracking-widest uppercase font-geist">
                SISTEMA ACTIVO
              </span>
            </div>
            <div class="flex gap-0.5 h-1 w-24 opacity-80">
              <div class="w-1 bg-[#FFAB00]"></div>
              <div class="w-2 bg-[#FFAB00]"></div>
              <div class="w-0.5 bg-[#FFAB00]"></div>
              <div class="w-3 bg-[#FFAB00]"></div>
              <div class="w-1 bg-[#FFAB00]"></div>
            </div>
          </div>
          <div class="text-[#FFAB00]/80 font-mono text-xs tracking-widest uppercase mb-4 font-geist" style="letter-spacing: 0.1em;">
            Finanzas Inteligentes
          </div>
          <h1 class="text-5xl sm:text-6xl lg:text-[5.5rem] uppercase tracking-tight leading-[1.1] mb-6 text-metallic font-jakarta font-medium">
            SISTEMA DE<br/>
            <span class="text-white">PAGOS NOVAPAY</span>
          </h1>
          <p class="leading-relaxed uppercase text-sm tracking-wide font-mono max-w-xl mb-10 text-orange-50 font-geist">
            NovaPay centraliza tus pagos, reportes y flujo de caja. Diseñado para empresas que operan en el futuro.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <RouterLink to="/dashboard" class="group relative flex items-center justify-center px-8 py-3.5 w-full sm:w-auto cursor-pointer overflow-hidden bg-[#1A2A3A]/40 border border-white/5 backdrop-blur-sm shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
              <div class="absolute left-0 top-0 bottom-0 w-[4px] bg-[#FFAB00] transition-all group-hover:w-[8px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
              <div class="absolute right-0 top-0 bottom-0 w-[4px] bg-[#FFAB00] transition-all group-hover:w-[8px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-[#FFAB00]/0 via-[#FFAB00]/10 to-[#FFAB00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span class="relative z-10 text-white font-mono text-xs tracking-widest uppercase flex items-center gap-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all font-geist">
                Ver Demo →
              </span>
            </RouterLink>
            <a href="#features" class="w-full sm:w-auto bg-[#000000]/50 backdrop-blur-sm border border-[#D4A373]/40 px-8 py-3.5 text-xs font-mono tracking-widest uppercase flex justify-center items-center hover:text-[#FFAB00] hover:border-[#FFAB00]/40 transition-colors text-orange-50 font-geist">
              Conocer más
            </a>
          </div>
        </div>
        <div class="lg:w-1/2 aspect-square max-w-[500px] lg:max-w-[700px] mx-auto lg:mt-0 flex pointer-events-none w-full mt-16 relative items-center justify-center">
          <div class="absolute w-[120%] h-[120%] border border-[#FFAB00]/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute w-[90%] h-[90%] border border-[#FFAB00]/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
          <div class="relative w-24 h-24 border-2 border-[#FFAB00] rounded-full flex items-center justify-center bg-[#0F1A24]">
            <div class="absolute inset-0 bg-[#FFAB00] rounded-full blur-[30px] opacity-20"></div>
            <div class="w-8 h-8 bg-[#FF6D00] rounded-sm rotate-45 shadow-[0_0_15px_#FFAB00]"></div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="bg-[#030303] mt-32 relative border-t border-b border-[#FFAB00]/10 py-24">
        <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div class="inline-flex px-3 py-1 border border-[#FFAB00]/20 bg-[#5C3A0B]/30 text-xs font-mono text-[#FFAB00] uppercase tracking-widest mb-8 font-geist">
            Estadísticas del Sistema
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
              <p class="text-4xl tracking-tight mb-2 text-[#FFAB00] font-jakarta font-medium">{{ stat.value }}</p>
              <p class="text-xs font-mono uppercase tracking-widest text-orange-50 font-geist">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="max-w-7xl mx-auto px-6 py-32">
        <div class="mb-12 border-l-[6px] border-[#FFAB00] pl-6 shadow-[inset_2px_0_10px_rgba(255,171,0,0.1)]">
          <div class="text-xs font-mono text-[#FFAB00] uppercase tracking-widest mb-4 font-geist">
            Especificaciones del Sistema
          </div>
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 class="text-3xl sm:text-4xl tracking-widest max-w-md leading-tight uppercase font-jakarta font-medium">
              CAPACIDADES DEL<br/>SISTEMA NOVAPAY
            </h2>
            <p class="text-xs font-mono uppercase tracking-widest max-w-sm md:text-right text-orange-50 font-geist">
              Sincronización de datos en tiempo real. <br/>Cifrado cuántico activo.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="f in features" :key="f.title" class="p-8 relative overflow-hidden group glow-card" style="background: linear-gradient(135deg, rgba(15, 26, 36, 0.95) 0%, rgba(10, 16, 24, 0.98) 100%); box-shadow: 0 0 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(255, 171, 0, 0.05); border: 1px solid rgba(255, 171, 0, 0.2);">
            <div class="relative z-10">
              <div class="text-2xl mb-4">{{ f.icon }}</div>
              <h3 class="text-xl tracking-widest mb-2 uppercase text-white font-jakarta font-medium">
                {{ f.title }}
              </h3>
              <p class="text-xs font-mono uppercase mb-4 max-w-xs leading-relaxed text-orange-50 font-geist">
                {{ f.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
        <div class="border border-[#FFAB00]/20 bg-[#5C3A0B]/30 p-10 sm:p-16 relative">
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFAB00]"></div>
          <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFAB00]"></div>
          <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFAB00]"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFAB00]"></div>
          <p class="text-xs text-[#FFAB00] tracking-widest uppercase mb-4 font-mono font-geist">// Únete ahora</p>
          <h2 class="text-3xl sm:text-5xl uppercase tracking-widest mb-4 font-jakarta font-medium">EMPIEZA HOY.</h2>
          <p class="text-orange-50 text-sm mb-8 font-mono uppercase tracking-widest font-geist">Sin tarjeta de crédito. Configura tu cuenta en 2 minutos.</p>
          <RouterLink to="/login" class="inline-block bg-[#1A2A3A]/40 border border-white/5 px-10 py-3.5 text-xs font-mono tracking-widest uppercase text-white transition hover:border-[#FFAB00] glow-card font-geist">
            Crear cuenta gratis →
          </RouterLink>
        </div>
      </section>

      <!-- Footer -->
      <footer class="relative border-t border-[#FFAB00]/10 py-12 text-center bg-black">
        <p class="text-xs text-gray-600 tracking-widest uppercase font-mono font-geist">© 2025 NOVAPAY INC. // FUTURE ENGINEERED.</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
const stats = [
  { value: '$2.4B+', label: 'Procesado' },
  { value: '12K+', label: 'Empresas' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9★', label: 'Rating' },
]
const features = [
  { icon: '⚡', title: 'Pagos instantáneos', desc: 'Transfiere en segundos a cualquier banco del mundo.' },
  { icon: '📊', title: 'Analytics real-time', desc: 'Métricas clave y flujo de caja desde un solo panel.' },
  { icon: '🔒', title: 'Seguridad bancaria', desc: 'Encriptación de nivel bancario y 2FA integrado.' },
  { icon: '🌍', title: 'Multi-divisa', desc: 'Opera en +50 divisas sin comisiones ocultas.' },
  { icon: '🤖', title: 'Automatización', desc: 'Pagos recurrentes y reglas de gasto automáticas.' },
  { icon: '📱', title: 'Mobile first', desc: 'Gestión completa desde cualquier dispositivo.' },
]
</script>
