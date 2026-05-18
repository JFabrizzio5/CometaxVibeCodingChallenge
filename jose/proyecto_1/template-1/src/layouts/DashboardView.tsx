import { Button, Card } from "../components";
import { MOCK_ANALYTICS } from "../mock/mock";
import {
  Plus,
  Download
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

export const DashboardView = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
        <p className="text-zinc-500 text-sm">Bienvenido de nuevo. Aquí está el rendimiento de hoy.</p>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" className="hidden sm:flex"><Download size={16}/> Exportar</Button>
        <Button><Plus size={16}/> Nuevo Proyecto</Button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'MRR Total', value: '$24.5k', trend: '+12%', pos: true },
        { label: 'Usuarios Activos', value: '1,429', trend: '+5%', pos: true },
        { label: 'Churn Rate', value: '1.2%', trend: '-0.2%', pos: true },
        { label: 'Conversión', value: '3.4%', trend: '-1%', pos: false },
      ].map((stat, i) => (
        <Card key={i}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${stat.pos ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
              {stat.trend}
            </span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-semibold text-white">Ingresos del Periodo</h3>
          <select className="bg-transparent border-none text-xs text-zinc-500 focus:ring-0 cursor-pointer outline-none">
            <option>Últimos 30 días</option>
            <option>Últimos 90 días</option>
          </select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ANALYTICS}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.2}/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#18181b" />
              <XAxis dataKey="name" stroke="#52525b" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#52525b" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }} />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#chartGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3 className="font-semibold text-white mb-6">Actividad Reciente</h3>
        <div className="space-y-5">
          {[
            { user: 'Olivia Martin', time: 'hace 2 min', action: 'Suscripción Pro', amount: '+$199' },
            { user: 'Jackson Lee', time: 'hace 10 min', action: 'Nuevo usuario', amount: null },
            { user: 'Isabella N.', time: 'hace 1 h', action: 'Ticket cerrado', amount: null },
            { user: 'William Kim', time: 'hace 3 h', action: 'Reembolso', amount: '-$49', neg: true },
          ].map((act, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                  {act.user[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-white leading-none">{act.user}</p>
                  <p className="text-[11px] text-zinc-500 mt-1">{act.action}</p>
                </div>
              </div>
              <div className="text-right">
                {act.amount && <p className={`text-xs font-bold ${act.neg ? 'text-red-400' : 'text-emerald-400'}`}>{act.amount}</p>}
                <p className="text-[10px] text-zinc-600">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-8 text-xs">Ver todo</Button>
      </Card>
    </div>
  </div>
);