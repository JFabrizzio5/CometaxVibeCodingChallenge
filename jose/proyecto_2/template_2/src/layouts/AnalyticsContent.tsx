import { Card } from '../components';
import {
  TrendingUp,
  Clock,
  MonitorSmartphone,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { ANALYTICS_DATA, DEVICE_DATA, METRICS_DATA } from '../mock/mock';

export const AnalyticsContent = () => {

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            <Sparkles size={12} />
            Insights Inteligentes
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter leading-none">
            Analíticas Avanzadas
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-3 font-medium max-w-2xl">
            Monitorea el rendimiento de tu ecosistema digital en tiempo real.
          </p>
        </div>

        <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl flex items-center gap-2 text-xs font-bold text-slate-500 shadow-sm w-fit">
          <Clock size={16} />
          Últimos 30 días
        </div>
      </div>

      {/* METRICS_DATA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {METRICS_DATA.map((m, i) => (
          <Card
            key={i}
            className="border border-slate-100 hover:shadow-xl hover:shadow-sky-100/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {m.title}
                </p>

                <h3 className="text-3xl font-black text-slate-900 mt-3">
                  {m.value}
                </h3>

                <div className="mt-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black">
                  <ArrowUpRight size={12} />
                  {m.growth}
                </div>
              </div>

              <div className={`p-4 rounded-2xl ${m.bg} ${m.color}`}>
                <m.icon size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Heatmap */}
        <Card
          className="xl:col-span-2 overflow-hidden"
          title="Actividad del Ecosistema"
          subtitle="Usuarios activos y conversión mensual"
        >
          <div className="h-[320px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ANALYTICS_DATA}>
                <defs>
                  <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>

                  <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  stroke="#94a3b8"
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  fontSize={12}
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  fill="url(#usersGradient)"
                />

                <Area
                  type="monotone"
                  dataKey="conversion"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#conversionGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Devices */}
          <Card
            title="Dispositivos"
            subtitle="Uso por plataforma"
          >
            <div className="flex items-center justify-center py-6">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border-[16px] border-slate-100"></div>

                <div className="absolute inset-0 rounded-full border-[16px] border-transparent border-t-sky-500 border-r-sky-500 rotate-45"></div>

                <div className="absolute inset-[22%] bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                  <MonitorSmartphone size={26} className="text-slate-700 mb-1" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Devices
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {DEVICE_DATA.map((d, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <span>{d.l}</span>
                    <span>{d.p}%</span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`${d.c} h-full rounded-full transition-all duration-700`}
                      style={{ width: `${d.p}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ROI */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-400 to-sky-500 text-white border-none shadow-2xl shadow-emerald-100">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black opacity-80 uppercase tracking-[0.25em]">
                  ROI GLOBAL
                </p>

                <h4 className="text-5xl font-black mt-2 leading-none">
                  4.8x
                </h4>

                <p className="text-sm mt-3 text-white/80 font-medium">
                  Rendimiento superior al promedio del mercado.
                </p>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <TrendingUp size={34} />
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};