<template>
  <div class="app-shell">

    <aside class="sidebar" :class="open ? 'sidebar-open' : 'sidebar-closed'">
      <div class="sidebar-logo">
        <div class="brand-icon">P</div>
        <span class="sidebar-logo-text">PeopleOS</span>
      </div>
      <nav class="sidebar-nav">
        <RouterLink v-for="item in nav" :key="item.path" :to="item.path"
          class="nav-item" :class="{ active: route.path === item.path }" @click="open=false">
          <span class="nav-item-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>
      <div class="sidebar-user">
        <RouterLink to="/perfil" class="sidebar-user-link" @click="open=false">
          <div class="user-avatar">AD</div>
          <div>
            <p class="user-name">Ana Díaz</p>
            <p class="user-role">HR Manager</p>
          </div>
        </RouterLink>
      </div>
    </aside>

    <div v-if="open" class="mobile-overlay" @click="open=false"></div>

    <div class="main-col">
      <header class="app-header">
        <div class="header-left">
          <button class="mobile-menu-btn" @click="open=true">☰</button>
          <div>
            <p class="header-title">Empleados</p>
            <p class="header-sub">248 personas en la organización</p>
          </div>
        </div>
        <div class="header-right">
          <RouterLink to="/nuevo-empleado" class="btn-primary" style="font-size:12px; padding:8px 16px;">+ Nuevo empleado</RouterLink>
        </div>
      </header>

      <div class="app-content">
        <div class="content-inner">

          <div class="filter-bar">
            <div class="filter-bar-inner">
              <div class="search-wrap">
                <span class="search-icon">🔍</span>
                <input type="text" v-model="searchQuery"
                  placeholder="Buscar por nombre, rol o departamento..."
                  class="search-input form-input" style="padding-left:48px" />
              </div>
              <div class="filter-selects">
                <select v-model="filterDept" class="filter-select form-select">
                  <option value="">Todos los departamentos</option>
                  <option>Ingeniería</option>
                  <option>Diseño</option>
                  <option>Ventas</option>
                  <option>Producto</option>
                </select>
                <select v-model="filterStatus" class="filter-select form-select">
                  <option value="">Todos los estados</option>
                  <option>Activo</option>
                  <option>Onboarding</option>
                </select>
              </div>
            </div>
          </div>

          <div class="employees-grid">
            <div v-for="e in filteredEmployees" :key="e.id" class="employee-card">
              <div class="employee-card-top">
                <div class="employee-avatar" :class="e.bg">{{ e.initials }}</div>
                <span class="employee-status" :class="e.statusClass">{{ e.status }}</span>
              </div>
              <p class="employee-name">{{ e.name }}</p>
              <p class="employee-role">{{ e.role }}</p>
              <div class="employee-card-footer">
                <div class="employee-dept">
                  <span class="dept-dot" :class="e.deptColor"></span>
                  {{ e.dept }}
                </div>
                <span class="employee-since">{{ e.since }}</span>
              </div>
            </div>
          </div>

          <div v-if="filteredEmployees.length === 0" class="empty-state">
            No se encontraron empleados con los filtros aplicados.
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()
const searchQuery = ref('')
const filterDept = ref('')
const filterStatus = ref('')

const nav = [
  { path:'/admin',          icon:'⊞', label:'Dashboard'      },
  { path:'/empleados',      icon:'👥', label:'Empleados'      },
  { path:'/nuevo-empleado', icon:'➕', label:'Nuevo empleado' },
  { path:'/perfil',         icon:'👤', label:'Mi perfil'      },
]

const employees = [
  { id:1, initials:'AG', name:'Ana García',   role:'Diseñadora UX',   dept:'Diseño',     since:'Ene 2024', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-violet-500/10 text-violet-400', deptColor:'bg-violet-500' },
  { id:2, initials:'CR', name:'Carlos Ruiz',  role:'Ing. Backend',    dept:'Ingeniería', since:'Mar 2023', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-cyan-500/10 text-cyan-400',   deptColor:'bg-teal-500'   },
  { id:3, initials:'ML', name:'María López',  role:'Product Manager', dept:'Producto',   since:'Jun 2022', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-teal-500/10 text-teal-400',   deptColor:'bg-cyan-500'   },
  { id:4, initials:'JS', name:'Juan Soto',    role:'Ing. Frontend',   dept:'Ingeniería', since:'Sep 2023', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-orange-500/10 text-orange-400',deptColor:'bg-teal-500'   },
  { id:5, initials:'LP', name:'Laura Pérez',  role:'Data Analyst',    dept:'Datos',      since:'Feb 2024', status:'Onboarding', statusClass:'bg-cyan-500/10 text-cyan-400', bg:'bg-pink-500/10 text-pink-400',   deptColor:'bg-orange-500' },
  { id:6, initials:'DM', name:'Diego Mora',   role:'DevOps',          dept:'Ingeniería', since:'Nov 2023', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-blue-500/10 text-blue-400',   deptColor:'bg-teal-500'   },
  { id:7, initials:'SC', name:'Sofia Cruz',   role:'Sales Lead',      dept:'Ventas',     since:'Abr 2022', status:'Activo',     statusClass:'bg-teal-500/10 text-teal-400', bg:'bg-yellow-500/10 text-yellow-400',deptColor:'bg-cyan-500'   },
  { id:8, initials:'RG', name:'Roberto Gil',  role:'Diseñador UI',    dept:'Diseño',     since:'Ene 2024', status:'Onboarding', statusClass:'bg-cyan-500/10 text-cyan-400', bg:'bg-violet-500/10 text-violet-400',deptColor:'bg-violet-500' },
]

const filteredEmployees = computed(() =>
  employees.filter(e => {
    const q = searchQuery.value.toLowerCase()
    return (!q || e.name.toLowerCase().includes(q) || e.role.toLowerCase().includes(q) || e.dept.toLowerCase().includes(q))
        && (!filterDept.value   || e.dept   === filterDept.value)
        && (!filterStatus.value || e.status === filterStatus.value)
  })
)
</script>