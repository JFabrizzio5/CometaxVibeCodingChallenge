import { Card, Button } from '../components';
import {
  Globe,
  Plus
} from 'lucide-react';
import { MONTHLY_DATA, STATS_DATA } from '../mock/mock';

export const DashboardContent = () => {

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-1 block">Vista General</span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="border-none bg-slate-100 shadow-none"><Globe size={18} /> Compartir</Button>
          <Button variant="success"><Plus size={18} /> Nuevo Proyecto</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS_DATA.map((stat, i) => (
          <Card key={i} className="hover:shadow-xl hover:shadow-sky-100/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h4 className="text-2xl font-black mt-2 text-slate-900 leading-none">{stat.value}</h4>
                <div className={`inline-flex items-center gap-1 text-[10px] mt-3 font-black px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.change}
                </div>
              </div>
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={22} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card title="Rendimiento del Ecosistema" subtitle="Transacciones mensuales integradas" className="lg:col-span-2">
          <div className="h-64 flex items-end justify-between gap-2 pt-10">
            {MONTHLY_DATA.map((item, i) => (
              <div
                key={i}
                className="flex-1 h-full flex flex-col justify-end items-center gap-2 group"
              >
                <div
                  className={`
          w-full rounded-t-xl transition-all duration-500
          ${i % 2 === 0
                      ? 'bg-sky-400 group-hover:bg-sky-500'
                      : 'bg-emerald-400 group-hover:bg-emerald-500'}
        `}
                  style={{ height: `${item.value}%` }}
                />

                <span className="text-[9px] font-bold text-slate-400">
                  {item.week}
                </span>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Actividad Reciente">
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-sky-400 mt-2"></div>
                <div>
                  <p className="text-xs font-black text-slate-800">Actualización del Sistema</p>
                  <p className="text-[10px] text-slate-400 font-bold">Hace {i * 2} horas</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};