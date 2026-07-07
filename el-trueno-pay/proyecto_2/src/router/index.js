import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import EmpleadosView from '../views/EmpleadosView.vue'
import NuevoEmpleadoView from '../views/NuevoEmpleadoView.vue'
import PerfilView from '../views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingView },
    { path: '/login', component: LoginView },
    { path: '/admin', component: AdminView },
    { path: '/empleados', component: EmpleadosView },
    { path: '/nuevo-empleado', component: NuevoEmpleadoView },
    { path: '/perfil', component: PerfilView },
  ],
})

export default router
