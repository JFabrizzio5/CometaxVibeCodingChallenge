<template>
  <div class="app-shell">

    <!-- Sidebar -->
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
            <p class="header-title">Panel de Control</p>
            <p class="header-sub">Buenos días, Ana Díaz 👋</p>
          </div>
        </div>
        <div class="header-right">
          <RouterLink to="/nuevo-empleado" class="btn-primary" style="display:none" id="new-emp-desktop">+ Nuevo empleado</RouterLink>
          <RouterLink to="/nuevo-empleado" class="btn-primary" style="font-size:12px; padding:8px 16px;">+ Nuevo empleado</RouterLink>
          <div class="header-avatar">AD</div>
        </div>
      </header>

      <div class="app-content">
        <div class="content-inner">

          <!-- KPIs -->
          <div class="kpi-cards">
            <div v-for="k in kpis" :key="k.label" class="kpi-card">
              <div class="kpi-card-top">
                <span class="kpi-card-label">{{ k.label }}</span>
                <span class="kpi-card-icon">{{ k.icon }}</span>
              </div>
              <p class="kpi-card-value">{{ k.value }}</p>
              <p class="kpi-card-change" :class="k.up ? 'kpi-up' : 'kpi-down'">
                {{ k.up ? '↑' : '↓' }} {{ k.change }}
              </p>
            </div>
          </div>

          <!-- Mid grid -->
          <div class="mid-grid">
            <div class="panel">
              <div class="panel-header">
                <span class="panel-title">Actividad reciente</span>
                <RouterLink to="/empleados" class="panel-link">Ver todo →</RouterLink>
              </div>
              <div>
                <div v-for="a in activity" :key="a.id" class="activity-row">
                  <div class="activity-avatar" :class="a.bg">{{ a.initials }}</div>
                  <div class="activity-body">
                    <p class="activity-text"><strong>{{ a.name }}</strong> {{ a.action }}</p>
                    <p class="activity-time">{{ a.time }}</p>
                  </div>
                  <span class="activity-tag" :class="a.tagClass">{{ a.tag }}</span>
                </div>
              </div>
            </div>

            <div class="panel" style="display:flex; flex-direction:column;">
              <div class="panel-header">
                <span class="panel-title">Por departamento</span>
              </div>
              <div style="flex:1">
                <div v-for="d in depts" :key="d.name" class="dept-row">
                  <div class="dept-row-header">
                    <span class="dept-row-name">{{ d.name }}</span>
                    <span class="dept-row-count">{{ d.count }}</span>
                  </div>
                  <div class="dept-bar-track">
                    <div class="dept-bar-fill" :class="d.color" :style="`width:${d.pct}%`"></div>
                  </div>
                </div>
              </div>
              <div class="dept-total">
                <span class="dept-total-label">Total empleados</span>
                <span class="dept-total-value">248</span>
              </div>
            </div>
          </div>

          <!-- Tasks -->
          <div class="panel">
            <div class="panel-header">
              <span class="panel-title">Tareas pendientes de HR</span>
              <span class="tasks-count">3 tareas activas</span>
            </div>
            <div class="tasks-grid">
              <div v-for="t in tasks" :key="t.title" class="task-card">
                <div class="task-card-top">
                  <span class="task-card-icon">{{ t.icon }}</span>
                  <span class="task-badge" :class="t.badgeClass">{{ t.badge }}</span>
                </div>
                <p class="task-title">{{ t.title }}</p>
                <p class="task-desc">{{ t.desc }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()

const nav = [
  { path:'/admin',          icon:'⊞', label:'Dashboard'      },
  { path:'/empleados',      icon:'👥', label:'Empleados'      },
  { path:'/nuevo-empleado', icon:'➕', label:'Nuevo empleado' },
  { path:'/perfil',         icon:'👤', label:'Mi perfil'      },
]

const kpis = [
  { label:'Total empleados',  value:'248',   icon:'👥', change:'+12 este mes',    up:true  },
  { label:'Retención',        value:'94.2%', icon:'💚', change:'+1.2%',           up:true  },
  { label:'Vacantes abiertas',value:'7',     icon:'📋', change:'-2 esta semana',  up:false },
  { label:'NPS empleados',    value:'72',    icon:'⭐', change:'+4 puntos',       up:true  },
]

const activity = [
  { id:1, initials:'AG', name:'Ana García',  action:'completó su onboarding',        time:'Hace 2 horas', tag:'Onboarding', tagClass:'bg-teal-500/10 text-teal-400',  bg:'bg-violet-500/10 text-violet-400' },
  { id:2, initials:'CR', name:'Carlos Ruiz', action:'solicitó 5 días de vacaciones', time:'Hace 4 horas', tag:'Vacaciones', tagClass:'bg-cyan-500/10 text-cyan-400',   bg:'bg-cyan-500/10 text-cyan-400'   },
  { id:3, initials:'ML', name:'María López', action:'actualizó su perfil',           time:'Ayer',         tag:'Perfil',     tagClass:'bg-slate-500/10 text-slate-400', bg:'bg-teal-500/10 text-teal-400'   },
  { id:4, initials:'JS', name:'Juan Soto',   action:'completó evaluación',           time:'Ayer',         tag:'Evaluación', tagClass:'bg-violet-500/10 text-violet-400',bg:'bg-orange-500/10 text-orange-400'},
]

const depts = [
  { name:'Ingeniería',  count:104, pct:42, color:'bg-gradient-to-r from-teal-500 to-cyan-400'   },
  { name:'Ventas',      count:62,  pct:25, color:'bg-gradient-to-r from-cyan-400 to-blue-500'   },
  { name:'Diseño',      count:45,  pct:18, color:'bg-gradient-to-r from-violet-400 to-purple-500'},
  { name:'Operaciones', count:37,  pct:15, color:'bg-gradient-to-r from-amber-400 to-orange-500' },
]

const tasks = [
  { icon:'📝', title:'Firmar contratos',     desc:'3 contratos pendientes de firma', badge:'Urgente',  badgeClass:'bg-red-500/10 text-red-400'    },
  { icon:'🎯', title:'Revisar evaluaciones', desc:'12 evaluaciones sin revisar',     badge:'Pendiente',badgeClass:'bg-yellow-500/10 text-yellow-400'},
  { icon:'👋', title:'Onboarding lunes',     desc:'2 nuevos empleados el lunes',     badge:'Próximo',  badgeClass:'bg-teal-500/10 text-teal-400'   },
]
</script>