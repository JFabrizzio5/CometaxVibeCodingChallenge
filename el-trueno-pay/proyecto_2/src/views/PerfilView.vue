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
        <RouterLink to="/perfil" class="sidebar-user-link active-profile" @click="open=false">
          <div class="user-avatar">AD</div>
          <div>
            <p class="user-name">Ana Díaz</p>
            <p class="user-role" style="color:#2dd4bf">HR Manager</p>
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
            <p class="header-title">Mi Perfil</p>
            <p class="header-sub">Gestiona tu cuenta y preferencias</p>
          </div>
        </div>
      </header>

      <div class="app-content">
        <div class="content-inner">

          <!-- Profile hero -->
          <div class="profile-hero">
            <div class="profile-avatar">AD</div>
            <div class="profile-info">
              <h2 class="profile-name">Ana Díaz</h2>
              <p class="profile-role">HR Manager • PeopleOS</p>
              <div class="profile-tags">
                <span class="profile-tag tag-admin">Administradora</span>
                <span class="profile-tag tag-lead">HR Lead</span>
              </div>
            </div>
            <button class="btn-ghost" style="padding:12px 24px; white-space:nowrap;">Cambiar foto</button>
          </div>

          <!-- Tabs -->
          <div class="tabs-nav">
            <button v-for="tab in tabs" :key="tab"
              class="tab-btn" :class="{ active: activeTab === tab }"
              @click="activeTab = tab">{{ tab }}</button>
          </div>

          <!-- General -->
          <div v-if="activeTab === 'General'" class="profile-form-card">
            <p class="profile-section-title">Información Personal</p>
            <div class="form-grid">
              <div v-for="f in fields" :key="f.label" class="form-field">
                <label class="form-label">{{ f.label }}</label>
                <input :value="f.value" class="form-input" />
              </div>
            </div>
            <div class="profile-form-footer">
              <button class="btn-primary" style="padding:12px 32px;">Guardar cambios</button>
            </div>
          </div>

          <!-- Preferencias -->
          <div v-if="activeTab === 'Preferencias'" class="profile-form-card">
            <p class="profile-section-title">Preferencias del Sistema</p>
            <div v-for="pref in prefs" :key="pref.label" class="pref-row">
              <div>
                <p class="pref-label">{{ pref.label }}</p>
                <p class="pref-desc">{{ pref.desc }}</p>
              </div>
              <div class="toggle-wrap">
                <input type="checkbox" v-model="pref.on" class="toggle-input" />
                <span class="toggle-track"></span>
                <span class="toggle-thumb"></span>
              </div>
            </div>
          </div>

          <!-- Danger zone -->
          <div class="danger-zone">
            <p class="danger-title">Zona de Peligro</p>
            <p class="danger-sub">Acciones irreversibles que afectan tu cuenta.</p>
            <hr class="danger-divider" />
            <RouterLink to="/" class="btn-danger">Cerrar sesión en todos los dispositivos</RouterLink>
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
const activeTab = ref('General')
const route = useRoute()

const nav = [
  { path:'/admin',          icon:'⊞', label:'Dashboard'      },
  { path:'/empleados',      icon:'👥', label:'Empleados'      },
  { path:'/nuevo-empleado', icon:'➕', label:'Nuevo empleado' },
  { path:'/perfil',         icon:'👤', label:'Mi perfil'      },
]

const tabs = ['General', 'Preferencias', 'Seguridad']

const fields = [
  { label:'Nombre',            value:'Ana'                  },
  { label:'Apellidos',         value:'Díaz'                 },
  { label:'Correo electrónico',value:'ana@peopleos.com'     },
  { label:'Teléfono',          value:'+52 55 9876 5432'     },
  { label:'Puesto',            value:'HR Manager'           },
  { label:'Departamento',      value:'Recursos Humanos'     },
]

const prefs = ref([
  { label:'Notificaciones por email', desc:'Recibe alertas importantes en tu correo corporativo',  on:true  },
  { label:'Modo oscuro',              desc:'Interfaz optimizada para baja luminosidad',             on:true  },
  { label:'Resumen semanal',          desc:'Recibir reporte automático cada lunes',                 on:false },
])
</script>