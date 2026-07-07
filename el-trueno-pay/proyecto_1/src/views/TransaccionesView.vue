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
        <p class="text-xs text-[#FFAB00] tracking-widest uppercase font-mono mb-2">// Movimientos</p>
        <h1 class="text-2xl sm:text-3xl font-black mb-6 tracking-tight uppercase font-jakarta">TRANSACCIONES</h1>

        <!-- Filtros (Form style) -->
        <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-4 sm:p-5 mb-6 flex flex-wrap gap-3 backdrop-blur-md shadow-xl">
          <input type="text" placeholder="Buscar transacción..."
            class="bg-black border border-[#FFAB00]/20 px-4 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#FFAB00] transition flex-1 min-w-40 font-mono tracking-wider" />
          <select class="bg-black border border-[#FFAB00]/20 px-4 py-2 text-xs text-gray-400 focus:outline-none focus:border-[#FFAB00] transition font-mono">
            <option>Todos los tipos</option>
            <option>Ingresos</option>
            <option>Gastos</option>
          </select>
          <input type="date" class="bg-black border border-[#FFAB00]/20 px-4 py-2 text-xs text-gray-400 focus:outline-none focus:border-[#FFAB00] transition font-mono" />
          <button class="bg-[#1A2A3A]/40 border border-white/5 px-5 py-2 text-xs font-mono tracking-widest uppercase transition hover:border-[#FFAB00] text-white">Filtrar</button>
        </div>

        <!-- Tabla desktop -->
        <div class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 hidden sm:block overflow-x-auto backdrop-blur-md shadow-2xl">
          <table class="w-full text-xs font-mono">
            <thead class="border-b border-[#FFAB00]/10 bg-black/40">
              <tr class="text-gray-500 tracking-widest uppercase">
                <th class="text-left px-6 py-4 font-jakarta">Descripción</th>
                <th class="text-left px-6 py-4 font-jakarta">Categoría</th>
                <th class="text-left px-6 py-4 font-jakarta">Fecha</th>
                <th class="text-left px-6 py-4 font-jakarta">Estado</th>
                <th class="text-right px-6 py-4 font-jakarta">Monto</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#FFAB00]/10">
              <tr v-for="t in transactions" :key="t.id" class="hover:bg-[#FFAB00]/5 transition">
                <td class="px-6 py-4 flex items-center gap-3">
                  <span class="text-lg">{{ t.icon }}</span>
                  <span class="font-bold tracking-wider uppercase font-jakarta">{{ t.name }}</span>
                </td>
                <td class="px-6 py-4 text-gray-500 tracking-wider">{{ t.category }}</td>
                <td class="px-6 py-4 text-gray-500">{{ t.date }}</td>
                <td class="px-6 py-4">
                  <span :class="t.status === 'Completado' ? 'text-emerald-400 border-emerald-500/30' : 'text-yellow-400 border-yellow-500/30'"
                    class="border px-2 py-1 text-[10px] tracking-widest uppercase font-mono">{{ t.status }}</span>
                </td>
                <td class="px-6 py-4 text-right font-bold font-jakarta" :class="t.amount.startsWith('+') ? 'text-emerald-400' : 'text-red-400'">{{ t.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Cards mobile -->
        <div class="sm:hidden space-y-3">
          <div v-for="t in transactions" :key="t.id" class="border border-[#FFAB00]/20 bg-[#0F1A24]/90 p-4 backdrop-blur-md">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-3">
                <span class="text-xl">{{ t.icon }}</span>
                <div class="min-w-0">
                  <p class="text-xs font-bold tracking-wider uppercase font-jakarta">{{ t.name }}</p>
                  <p class="text-xs text-gray-500">{{ t.category }}</p>
                </div>
              </div>
              <span class="font-jakarta font-bold text-sm" :class="t.amount.startsWith('+') ? 'text-emerald-400' : 'text-red-400'">{{ t.amount }}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-600 font-mono">
              <span>{{ t.date }}</span>
              <span :class="t.status === 'Completado' ? 'text-emerald-400' : 'text-yellow-400'" class="tracking-widest uppercase">{{ t.status }}</span>
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
const transactions = [
  { id: 1, icon: '💼', name: 'Acme Corp', category: 'Ingresos', date: '12 MAY 2025', status: 'Completado', amount: '+$8,500' },
  { id: 2, icon: '🛒', name: 'Amazon Business', category: 'Compras', date: '12 MAY 2025', status: 'Completado', amount: '-$1,240' },
  { id: 3, icon: '☁️', name: 'AWS Services', category: 'Infraestructura', date: '10 MAY 2025', status: 'Completado', amount: '-$320' },
  { id: 4, icon: '🎯', name: 'Google Ads', category: 'Marketing', date: '09 MAY 2025', status: 'Completado', amount: '-$750' },
  { id: 5, icon: '🏢', name: 'Beta Solutions', category: 'Ingresos', date: '08 MAY 2025', status: 'Pendiente', amount: '+$12,000' },
  { id: 6, icon: '📱', name: 'Slack', category: 'Software', date: '07 MAY 2025', status: 'Completado', amount: '-$87' },
]
</script>
