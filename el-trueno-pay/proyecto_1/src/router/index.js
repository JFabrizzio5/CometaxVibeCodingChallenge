import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import TransaccionesView from '../views/TransaccionesView.vue'
import ReportesView from '../views/ReportesView.vue'
import PerfilView from '../views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingView },
    { path: '/login', component: LoginView },
    { path: '/dashboard', component: DashboardView },
    { path: '/transacciones', component: TransaccionesView },
    { path: '/reportes', component: ReportesView },
    { path: '/perfil', component: PerfilView },
  ],
})

export default router
