<template>
  <div class="min-h-screen bg-black text-white flex items-center justify-center px-4 relative font-jakarta">
    <!-- Background Elements -->
    <svg class="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 15,-10 C 15,30 85,70 85,110" fill="none" stroke="#FF6D00" stroke-width="0.1" stroke-dasharray="10 150"></path>
      <path d="M 85,-10 C 85,40 20,60 20,110" fill="none" stroke="#FFAB00" stroke-width="0.1" stroke-dasharray="15 150"></path>
    </svg>
    <div class="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    <div class="fixed inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle at center, transparent 0%, #000000 90%);"></div>

    <div class="w-full max-w-sm relative z-10">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="w-10 h-10 border border-[#FFAB00] bg-[#000000] flex items-center justify-center mx-auto mb-5 relative">
          <div class="w-4 h-4 bg-[#FF6D00] rotate-45 shadow-[0_0_10px_#FFAB00]"></div>
        </div>
        <p class="text-xs text-[#FFAB00] tracking-widest uppercase font-mono mb-2">// Acceso al sistema</p>
        <h1 class="text-2xl sm:text-3xl font-black tracking-tight uppercase font-jakarta">BIENVENIDO.</h1>
      </div>

      <!-- Card -->
      <div class="glow-card border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-6 sm:p-8 relative backdrop-blur-xl shadow-2xl">
        <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FFAB00]"></div>
        <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FFAB00]"></div>

        <div class="mb-5">
          <label class="block text-xs text-gray-500 tracking-widest uppercase mb-2 font-mono">Correo electrónico</label>
          <input type="email" placeholder="tu@empresa.com"
            class="w-full bg-black border border-[#FFAB00]/20 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFAB00] transition font-mono tracking-wider" />
        </div>
        <div class="mb-6">
          <label class="block text-xs text-gray-500 tracking-widest uppercase mb-2 font-mono">Contraseña</label>
          <input type="password" placeholder="••••••••"
            class="w-full bg-black border border-[#FFAB00]/20 px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFAB00] transition font-mono tracking-wider" />
        </div>

        <RouterLink to="/dashboard"
          class="group relative flex items-center justify-center w-full bg-[#1A2A3A]/40 border border-white/5 py-3 text-xs font-mono tracking-widest uppercase transition overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FFAB00] transition-all group-hover:w-[6px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
          <div class="absolute right-0 top-0 bottom-0 w-[3px] bg-[#FFAB00] transition-all group-hover:w-[6px] group-hover:bg-white shadow-[0_0_10px_rgba(255,171,0,0.5)]"></div>
          <span class="relative z-10 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
            Iniciar sesión →
          </span>
        </RouterLink>

        <p class="text-center text-xs text-gray-600 mt-4 font-mono">
          ¿Sin cuenta?
          <RouterLink to="/" class="text-[#FFAB00] hover:text-white transition-colors tracking-wider">Regístrate</RouterLink>
        </p>
      </div>
      <p class="text-center text-xs text-gray-700 mt-6 tracking-widest font-mono uppercase">SISTEMA SEGURO // AES-256</p>
    </div>
  </div>
</template>
