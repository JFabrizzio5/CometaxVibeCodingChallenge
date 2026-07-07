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
          <div style="display:flex; align-items:center; gap:12px;">
            <RouterLink to="/empleados" style="color:#64748b; text-decoration:none; font-size:13px;">← Empleados</RouterLink>
            <span style="color:rgba(255,255,255,.1)">/</span>
            <p class="header-title">Nuevo Empleado</p>
          </div>
        </div>
      </header>

      <div class="app-content">
        <div class="content-inner">

          <!-- Stepper -->
          <div class="stepper">
            <template v-for="(step, i) in steps" :key="step">
              <div class="step-item">
                <div class="step-circle" :class="i === activeStep ? 'active' : i < activeStep ? 'done' : 'inactive'">
                  {{ i < activeStep ? '✓' : i + 1 }}
                </div>
                <span class="step-label" :class="i === activeStep ? 'active' : 'inactive'">{{ step }}</span>
              </div>
              <div v-if="i < steps.length - 1" class="step-connector"></div>
            </template>
          </div>

          <!-- Form -->
          <div class="form-card">

            <div class="form-section">
              <h2 class="form-section-title">Información Personal</h2>
              <p class="form-section-sub">Datos básicos para crear el perfil del empleado.</p>
              <div class="form-grid">
                <div v-for="f in personalFields" :key="f.label" class="form-field">
                  <label class="form-label">{{ f.label }}</label>
                  <input :type="f.type" :placeholder="f.placeholder" class="form-input" />
                </div>
              </div>
              <div class="form-field" style="margin-top:20px">
                <label class="form-label">Dirección Completa</label>
                <input type="text" placeholder="Calle, número, colonia, ciudad y código postal..." class="form-input" />
              </div>
            </div>

            <hr class="form-divider" />

            <div class="form-section">
              <h2 class="form-section-title">Información Laboral</h2>
              <p class="form-section-sub">Posición, condiciones de contratación y detalles del puesto.</p>
              <div class="form-grid">
                <div v-for="f in workFields" :key="f.label" class="form-field">
                  <label class="form-label">{{ f.label }}</label>
                  <select v-if="f.type === 'select'" class="form-select">
                    <option v-for="o in f.options" :key="o">{{ o }}</option>
                  </select>
                  <input v-else :type="f.type" :placeholder="f.placeholder" class="form-input" />
                </div>
              </div>
            </div>

            <hr class="form-divider" />

            <div class="form-section">
              <h2 class="form-section-title">Accesos y Herramientas</h2>
              <p class="form-section-sub">Selecciona las herramientas que se aprovisionarán automáticamente.</p>
              <div class="tools-grid">
                <label v-for="tool in tools" :key="tool.name"
                  class="tool-label" :class="tool.checked ? 'checked' : 'unchecked'">
                  <div class="tool-left">
                    <span class="tool-icon">{{ tool.icon }}</span>
                    <span class="tool-name">{{ tool.name }}</span>
                  </div>
                  <div class="toggle-wrap">
                    <input type="checkbox" v-model="tool.checked" class="toggle-input" />
                    <span class="toggle-track"></span>
                    <span class="toggle-thumb"></span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          <div class="form-footer">
            <RouterLink to="/empleados" class="btn-ghost" style="padding:14px 24px; text-align:center; border-radius:16px;">Cancelar</RouterLink>
            <button class="btn-ghost" style="padding:14px 24px; border-radius:16px;">Guardar borrador</button>
            <RouterLink to="/empleados" class="btn-primary" style="flex:2; text-align:center; padding:14px; border-radius:16px; font-size:13px;">Crear Empleado</RouterLink>
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
const activeStep = ref(0)
const route = useRoute()

const nav = [
  { path:'/admin',          icon:'⊞', label:'Dashboard'      },
  { path:'/empleados',      icon:'👥', label:'Empleados'      },
  { path:'/nuevo-empleado', icon:'➕', label:'Nuevo empleado' },
  { path:'/perfil',         icon:'👤', label:'Mi perfil'      },
]

const steps = ['Info personal', 'Accesos', 'Documentos', 'Confirmar']

const personalFields = [
  { label:'Nombre(s)',          type:'text',  placeholder:'Ana'              },
  { label:'Apellidos',          type:'text',  placeholder:'García López'     },
  { label:'Correo corporativo', type:'email', placeholder:'ana@empresa.com'  },
  { label:'Teléfono',           type:'tel',   placeholder:'+52 55 1234 5678' },
  { label:'Fecha de nacimiento',type:'date'                                  },
  { label:'CURP',               type:'text',  placeholder:'GALA000101...'    },
]

const workFields = [
  { label:'Puesto',           type:'text',   placeholder:'Diseñadora UX'                                          },
  { label:'Departamento',     type:'select', options:['Ingeniería','Diseño','Ventas','Operaciones','Producto']     },
  { label:'Fecha de inicio',  type:'date'                                                                         },
  { label:'Tipo de contrato', type:'select', options:['Tiempo completo','Medio tiempo','Freelance']               },
  { label:'Salario mensual',  type:'text',   placeholder:'$35,000 MXN'                                           },
  { label:'Modalidad',        type:'select', options:['Remoto','Presencial','Híbrido']                            },
]

const tools = ref([
  { icon:'💬', name:'Slack',  checked:true  },
  { icon:'📧', name:'Gmail',  checked:true  },
  { icon:'📁', name:'Drive',  checked:true  },
  { icon:'🎨', name:'Figma',  checked:false },
  { icon:'📊', name:'Notion', checked:false },
  { icon:'🔧', name:'GitHub', checked:false },
])
</script>