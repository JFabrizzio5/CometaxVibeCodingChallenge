import {
  BarChart3,
  Layers,
  CreditCard,
  Zap,
  TrendingUp,
  Activity,
  Users
} from 'lucide-react';

export const PROJECTS_DATA = [
    { name: 'Rediseño Web UX', client: 'AeroCloud', status: 'En Proceso', progress: 65, color: 'info' },
    { name: 'E-commerce API', client: 'EcoShop', status: 'Completado', progress: 100, color: 'success' },
    { name: 'App de Logística', client: 'FastShip', status: 'Revisión', progress: 90, color: 'warning' },
    { name: 'Integración CRM', client: 'Global Systems', status: 'En Proceso', progress: 20, color: 'info' },
];

export const MONTHLY_DATA = [
    { week: 'SEM 1', value: 60 },
    { week: 'SEM 2', value: 40 },
    { week: 'SEM 3', value: 80 },
    { week: 'SEM 4', value: 50 },
    { week: 'SEM 5', value: 90 },
    { week: 'SEM 6', value: 70 },
    { week: 'SEM 7', value: 85 },
  ];

export const STATS_DATA = [
    { label: 'Ingresos Brutos', value: '$84,120', change: '+12.5%', icon: CreditCard, color: 'text-sky-500', bg: 'bg-sky-50' },
    { label: 'Proyectos Activos', value: '42', change: '+4', icon: Layers, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Retención', value: '94.2%', change: '+1.2%', icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Consumo API', value: '2.4k', change: '-5%', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

export const ANALYTICS_DATA = [
    { month: 'Ene', users: 1200, conversion: 18 },
    { month: 'Feb', users: 1900, conversion: 24 },
    { month: 'Mar', users: 1500, conversion: 20 },
    { month: 'Abr', users: 2400, conversion: 32 },
    { month: 'May', users: 2800, conversion: 38 },
    { month: 'Jun', users: 3200, conversion: 42 },
    { month: 'Jul', users: 4100, conversion: 51 },
  ];

export const DEVICE_DATA = [
    { l: 'Escritorio', p: 75, c: 'bg-sky-500' },
    { l: 'Móvil', p: 20, c: 'bg-emerald-500' },
    { l: 'Tablet', p: 5, c: 'bg-slate-300' }
  ];

export const METRICS_DATA = [
    {
      title: 'Conversión',
      value: '18.2%',
      growth: '+4.3%',
      icon: TrendingUp,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Usuarios',
      value: '12.4k',
      growth: '+12%',
      icon: Users,
      color: 'text-sky-500',
      bg: 'bg-sky-50'
    },
    {
      title: 'Sesiones',
      value: '48.1k',
      growth: '+8%',
      icon: Activity,
      color: 'text-violet-500',
      bg: 'bg-violet-50'
    }
  ];