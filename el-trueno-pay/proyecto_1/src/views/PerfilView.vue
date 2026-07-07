<template>
  <div class="min-h-screen bg-black text-white flex font-jakarta">
    <!-- Sidebar -->
    <aside :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed md:static md:translate-x-0 z-40 w-64 h-full bg-[#060910] border-r border-[#FFAB00]/10 flex flex-col p-6 transition-transform duration-300">
      <div class="flex items-center gap-2 mb-10">
        <div class="w-6 h-6 border border-[#FFAB00] flex items-center justify-center relative overflow-hidden bg-[#5C3A0B]/50">
          <div class="w-1.5 h-1.5 bg-[#FF6D00] relative z-10 shadow-[0_0_8px_#FFAB00]"></div>
        </div>
        <span class="uppercase text-sm font-bold tracking-widest font-jakarta">NovaPay</span>
      </div>
      <nav class="flex flex-col gap-1 flex-1">
        <RouterLink v-for="item in nav" :key="item.path" :to="item.path" @click="sidebarOpen=false"
          class="flex items-center gap-3 px-4 py-2.5 text-xs tracking-widest uppercase transition hover:bg-[#FFAB00]/10 hover:text-[#FFAB00] border border-transparent hover:border-[#FFAB00]/20 font-mono"
          active-class="bg-[#FFAB00]/10 text-[#FFAB00] border-[#FFAB00]/20">
          <span class="text-base">{{ item.icon }}</span>{{ item.label }}
        </RouterLink>
      </nav>
    </aside>

    <!-- Overlay mobile -->
    <div v-if="sidebarOpen" @click="sidebarOpen=false" class="fixed inset-0 bg-black/60 z-30 md:hidden"></div>

    <!-- Main -->
    <main class="flex-1 min-w-0 p-4 sm:p-6 md:p-8 relative">
      <div class="fixed inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 171, 0, 0.1) 2px, rgba(255, 171, 0, 0.1) 4px); background-size: 100% 4px;"></div>

      <div class="flex items-center justify-between mb-6 md:hidden relative z-10">
        <button @click="sidebarOpen=true" class="p-2 border border-[#FFAB00]/20 text-[#FFAB00] font-mono">☰</button>
        <span class="font-jakarta text-xs tracking-widest uppercase font-bold">NovaPay</span>
        <div class="w-8 h-8 bg-[#FF6D00] flex items-center justify-center text-xs font-bold">JD</div>
      </div>

      <div class="relative z-10">
        <p class="text-xs text-[#FFAB00] tracking-widest uppercase font-mono mb-2">// Usuario</p>
        <h1 class="text-2xl sm:text-3xl font-black mb-8 tracking-tight uppercase font-jakarta">MI PERFIL</h1>

        <div class="max-w-2xl space-y-6">
          <!-- Avatar card -->
          <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 backdrop-blur-md shadow-xl relative overflow-hidden group glow-card">
            <div class="w-16 h-16 bg-[#FF6D00] flex items-center justify-center font-jakarta text-xl font-black shadow-[0_0_15px_#FF6D00] shrink-0">JD</div>
            <div class="flex-1">
              <h2 class="font-jakarta text-lg font-black tracking-wider uppercase">JUAN DÍAZ</h2>
              <p class="text-gray-500 text-xs tracking-widest uppercase mt-1 font-mono">Administrador</p>
              <span class="inline-block mt-2 border border-[#FFAB00]/30 text-[#FFAB00] text-xs px-2 py-0.5 tracking-widest uppercase font-mono font-bold">PRO PLAN</span>
            </div>
            <button class="border border-[#FFAB00]/20 hover:border-[#FFAB00] px-4 py-2 text-xs tracking-widest uppercase transition shrink-0 font-mono">Editar foto</button>
          </div>

          <!-- Formulario -->
          <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
            <p class="font-jakarta text-xs font-bold tracking-widest uppercase mb-5 text-[#FFAB00]">Información personal</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="field in fields" :key="field.label">
                <label class="block text-xs text-gray-500 tracking-widest uppercase mb-1.5 font-mono">{{ field.label }}</label>
                <input :value="field.value"
                  class="w-full bg-black border border-[#FFAB00]/20 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFAB00] transition font-mono tracking-wider" />
              </div>
            </div>
            <button class="mt-5 bg-[#1A2A3 la]/40 border border-white/5 px-6 py-2.5 text-xs font-mono tracking-widest uppercase transition hover:border-[#FFAB00] text-white glow-card">
              Guardar cambios →
            </button>
          </div>

          <!-- Logout -->
          <div class="border border-red-500/10 bg-[#0F1A24]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
            <p class="font-jakarta text-xs font-bold tracking-widest uppercase mb-1 text-red-400">Sesión activa</p>
            <p class="text-gray-500 text-xs tracking-wider mb-4 font-mono">Cierra sesión en todos los dispositivos conectados.</p>
            <RouterLink to="/"
              class="inline-flex items-center gap-2 border border-red-500/30 hover:border-red-400 text-red-400 hover:bg-red-500/10 px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition font-mono">
              ⏻ Cerrar sesión
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const sidebarOpen = ref(false)
const nav = [
  { path: '/dashboard', icon: '⬡', label: 'Dashboard' },
  { path: '/transacciones', icon: '◈', label: 'Transacciones' },
  { path: '/reportes', icon: '◎', label: 'Reportes' },
  { path: '/perfil', icon: '◉', label: 'Perfil' },
]
const fields = [
  { label: 'Nombre', value: 'Juan' },
  { label: 'Apellido', value: 'Díaz' },
  { label: 'Correo', value: 'juan@empresa.com' },
  { label: 'Teléfono', value: '+52 55 1234 5678' },
  { label: 'Empresa', value: 'NovaPay Inc.' },
  { label: 'Rol', value: 'Administrador' },
]
</script>
