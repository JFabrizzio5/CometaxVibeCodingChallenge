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
        <p class="text-xs text-[#FFAB00] tracking-widest uppercase font-mono mb-2">// Análisis</p>
        <h1 class="text-2xl sm:text-3xl font-black mb-2 tracking-tight uppercase font-jakarta">REPORTES</h1>
        <p class="text-gray-500 text-xs tracking-widest uppercase mb-8 font-mono">Periodo: Enero — Mayo 2025</p>

        <div class="grid sm:grid-cols-2 gap-6 mb-6">
          <!-- Ingresos vs Gastos -->
          <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
            <p class="font-jakarta text-xs font-bold tracking-widest uppercase mb-5 text-[#FFAB00]">Ingresos vs Gastos</p>
            <div class="space-y-4">
              <div v-for="m in months" :key="m.name">
                <div class="flex justify-between text-xs text-gray-500 mb-1.5 tracking-widest uppercase font-mono">
                  <span>{{ m.name }}</span><span>${{ m.income }}k / ${{ m.expense }}k</span>
                </div>
                <div class="h-1.5 bg-black flex gap-0.5 border border-[#FFAB00]/10">
                  <div class="h-full bg-[#FFAB00] transition-all shadow-[0_0_5px_#FFAB00]" :style="`width:${m.income}%`"></div>
                  <div class="h-full bg-red-600/70 transition-all" :style="`width:${m.expense}%`"></div>
                </div>
              </div>
            </div>
            <div class="flex gap-5 mt-5 text-xs tracking-widest uppercase font-mono">
              <span class="flex items-center gap-2"><span class="w-2 h-2 bg-[#FFAB00] shadow-[0_0_5px_#FFAB00]"></span>Ingresos</span>
              <span class="flex items-center gap-2"><span class="w-2 h-2 bg-red-600/70"></span>Gastos</span>
            </div>
          </div>

          <!-- Categorías -->
          <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
            <p class="font-jakarta text-xs font-bold tracking-widest uppercase mb-5 text-[#FFAB00]">Gasto por categoría</p>
            <div class="space-y-4">
              <div v-for="c in categories" :key="c.name" class="flex items-center gap-4">
                <span class="text-xl shrink-0">{{ c.icon }}</span>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between text-xs mb-1.5 tracking-widest uppercase font-mono">
                    <span class="truncate">{{ c.name }}</span>
                    <span class="text-gray-500 ml-2">{{ c.pct }}%</span>
                  </div>
                  <div class="h-1 bg-black border border-[#FFAB00]/10">
                    <div class="h-full transition-all" :class="c.color" :style="`width:${c.pct}%`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resumen -->
        <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-5 sm:p-6 backdrop-blur-md shadow-xl">
          <p class="font-jakarta text-xs font-bold tracking-widest uppercase mb-5 text-[#FFAB00]">Resumen anual 2025</p>
          <div class="grid grid-cols-3 gap-px bg-[#FFAB00]/10 border border-[#FFAB00]/10">
            <div v-for="s in summary" :key="s.label" class="bg-black p-4 sm:p-6 text-center">
              <p class="font-jakarta text-xl sm:text-2xl font-black" :class="s.color">{{ s.value }}</p>
              <p class="text-xs text-gray-500 mt-1 tracking-widest uppercase font-mono">{{ s.label }}</p>
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
const months = [
  { name: 'Enero', income: 72, expense: 38 },
  { name: 'Febrero', income: 65, expense: 42 },
  { name: 'Marzo', income: 80, expense: 35 },
  { name: 'Abril', income: 90, expense: 45 },
  { name: 'Mayo', income: 84, expense: 31 },
]
const categories = [
  { icon: '☁️', name: 'Infraestructura', pct: 35, color: 'bg-blue-500' },
  { icon: '🎯', name: 'Marketing', pct: 28, color: 'bg-orange-500' },
  { icon: '💼', name: 'Operaciones', pct: 22, color: 'bg-violet-500' },
  { icon: '🛒', name: 'Compras', pct: 15, color: 'bg-emerald-500' },
]
const summary = [
  { label: 'Total ingresos', value: '$420K', color: 'text-emerald-400' },
  { label: 'Total gastos', value: '$191K', color: 'text-red-400' },
  { label: 'Beneficio neto', value: '$229K', color: 'text-[#FFAB00]' },
]
</script>
