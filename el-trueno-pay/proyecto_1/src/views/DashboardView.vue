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
      <RouterLink to="/perfil" @click="sidebarOpen=false" class="flex items-center gap-3 p-3 border border-[#FFAB00]/10 hover:border-[#FFAB00]/30 transition mt-4 bg-black/40">
        <div class="w-8 h-8 bg-[#FF6D00] flex items-center justify-center text-xs font-bold font-jakarta">JD</div>
        <div>
          <p class="text-xs font-bold tracking-wider uppercase">JUAN DÍAZ</p>
          <p class="text-[10px] text-gray-500 tracking-widest uppercase font-mono">ADMIN</p>
        </div>
      </RouterLink>
    </aside>

    <!-- Overlay mobile -->
    <div v-if="sidebarOpen" @click="sidebarOpen=false" class="fixed inset-0 bg-black/60 z-30 md:hidden"></div>

    <!-- Main -->
    <main class="flex-1 min-w-0 p-4 sm:p-6 md:p-8 relative">
      <!-- Background HUD effects -->
      <div class="fixed inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 171, 0, 0.1) 2px, rgba(255, 171, 0, 0.1) 4px); background-size: 100% 4px;"></div>

      <!-- Mobile header -->
      <div class="flex items-center justify-between mb-6 md:hidden relative z-10">
        <button @click="sidebarOpen=true" class="p-2 border border-[#FFAB00]/20 text-[#FFAB00] font-mono">☰</button>
        <span class="font-jakarta text-xs tracking-widest uppercase font-bold">NovaPay</span>
        <div class="w-8 h-8 bg-[#FF6D00] flex items-center justify-center text-xs font-bold">JD</div>
      </div>

      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-2">
          <span class="text-xs text-[#FFAB00] tracking-widest uppercase font-mono">// Panel principal</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black mb-1 tracking-tight uppercase font-jakarta">DASHBOARD</h1>
        <p class="text-gray-500 text-xs tracking-widest uppercase mb-8 font-mono">Mayo 2025 // Resumen financiero</p>

        <!-- KPIs -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div v-for="k in kpis" :key="k.label" class="p-6 relative overflow-hidden glow-card" style="background: linear-gradient(135deg, rgba(15, 26, 36, 0.95) 0%, rgba(10, 16, 24, 0.98) 100%); box-shadow: 0 0 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(255, 171, 0, 0.05); border: 1px solid rgba(255, 171, 0, 0.2);">
            <p class="text-xs text-gray-500 tracking-widest uppercase mb-2 font-mono">{{ k.label }}</p>
            <p class="text-xl sm:text-2xl font-black text-[#FFAB00] font-jakarta">{{ k.value }}</p>
            <p :class="k.up ? 'text-emerald-400' : 'text-red-400'" class="text-xs mt-1 tracking-wider font-mono">{{ k.change }}</p>
          </div>
        </div>

        <!-- Transactions -->
        <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div class="flex justify-between items-center p-4 sm:p-6 border-b border-[#FFAB00]/10">
            <span class="font-jakarta text-xs font-bold tracking-widest uppercase">Transacciones recientes</span>
            <RouterLink to="/transacciones" class="text-xs text-[#FFAB00] hover:text-white transition-colors tracking-widest uppercase font-mono">Ver todas →</RouterLink>
          </div>
          <div class="divide-y divide-[#FFAB00]/10">
            <div v-for="t in transactions" :key="t.id" class="flex justify-between items-center p-4 sm:p-6 hover:bg-[#FFAB00]/5 transition group">
              <div class="flex items-center gap-3 sm:gap-4 min-w-0">
                <div class="w-9 h-9 border border-[#FFAB00]/20 flex items-center justify-center text-base shrink-0 bg-black group-hover:border-[#FFAB00] transition-colors">{{ t.icon }}</div>
                <div class="min-w-0">
                  <p class="text-xs sm:text-sm font-bold tracking-wider truncate uppercase font-jakarta">{{ t.name }}</p>
                  <p class="text-xs text-gray-500 tracking-widest font-mono">{{ t.date }}</p>
                </div>
              </div>
              <span :class="t.amount.startsWith('+') ? 'text-emerald-400' : 'text-red-400'" class="font-jakarta text-sm font-bold shrink-0 ml-2 font-mono">{{ t.amount }}</span>
            </div>
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
const kpis = [
  { label: 'Ingresos', value: '$84,230', change: '↑ +12.5%', up: true },
  { label: 'Gastos', value: '$31,450', change: '↓ -3.2%', up: false },
  { label: 'Balance neto', value: '$52,780', change: '↑ +8.1%', up: true },
  { label: 'Operaciones', value: '1,284', change: '↑ +24 hoy', up: true },
]
const transactions = [
  { id: 1, icon: '🛒', name: 'Amazon Business', date: '12 MAY 2025', amount: '-$1,240' },
  { id: 2, icon: '💼', name: 'Acme Corp', date: '11 MAY 2025', amount: '+$8,500' },
  { id: 3, icon: '☁️', name: 'AWS Services', date: '10 MAY 2025', amount: '-$320' },
  { id: 4, icon: '🎯', name: 'Google Ads', date: '09 MAY 2025', amount: '-$750' },
]
</script>
