import { Button } from "../components/Button";
import { Card } from "../components/Card";

import {
    Download,
    TrendingUp,
    Users,
    DollarSign,
    Activity
} from 'lucide-react';

import {
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    AreaChart,
    Area
} from 'recharts';

import {
    DEVICE_DATA,
    MOCK_ANALYTICS,
    MOCK_CUSTOMERS
} from "../mock/mock";

export const AnalyticsView = () => {

    const totalRevenue = MOCK_ANALYTICS.reduce(
        (acc, item) => acc + item.revenue,
        0
    );

    const totalTraffic = MOCK_ANALYTICS.reduce(
        (acc, item) => acc + item.value,
        0
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Analytics
                    </h1>

                    <p className="text-zinc-500 mt-1">
                        Análisis profundo del ecosistema.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Button variant="secondary" className="text-xs">
                        7D
                    </Button>

                    <Button variant="secondary" className="text-xs">
                        30D
                    </Button>

                    <Button className="text-xs">
                        <Download size={14} />
                        Exportar
                    </Button>
                </div>
            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                            <DollarSign size={18} className="text-indigo-400" />
                        </div>

                        <span className="text-emerald-400 text-xs font-medium">
                            +12.4%
                        </span>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        Revenue Total
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                        ${totalRevenue.toLocaleString()}
                    </h3>
                </Card>

                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-3xl" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Users size={18} className="text-purple-400" />
                        </div>

                        <span className="text-emerald-400 text-xs font-medium">
                            +4.2%
                        </span>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        Usuarios
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                        {totalTraffic.toLocaleString()}
                    </h3>
                </Card>

                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 blur-3xl" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                            <TrendingUp size={18} className="text-pink-400" />
                        </div>

                        <span className="text-emerald-400 text-xs font-medium">
                            +18%
                        </span>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        Conversión
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                        7.2%
                    </h3>
                </Card>

                <Card className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-3xl" />

                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Activity size={18} className="text-emerald-400" />
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />

                            <span className="text-xs text-zinc-400">
                                Live
                            </span>
                        </div>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        Usuarios Online
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                        429
                    </h3>
                </Card>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* CHART */}
                <Card className="xl:col-span-2">

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Tráfico & Revenue
                            </h3>

                            <p className="text-sm text-zinc-500 mt-1">
                                Evolución mensual del sistema
                            </p>
                        </div>
                    </div>

                    <div className="h-[350px]">

                        <ResponsiveContainer width="100%" height="100%">

                            <AreaChart data={MOCK_ANALYTICS}>

                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#18181b"
                                />

                                <XAxis
                                    dataKey="name"
                                    stroke="#71717a"
                                    fontSize={12}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <YAxis
                                    stroke="#71717a"
                                    fontSize={12}
                                    axisLine={false}
                                    tickLine={false}
                                />

                                <Tooltip
                                    cursor={{
                                        stroke: '#6366f1',
                                        strokeWidth: 1
                                    }}
                                    contentStyle={{
                                        backgroundColor: '#09090b',
                                        border: '1px solid #27272a',
                                        borderRadius: '14px',
                                        color: '#fff'
                                    }}
                                />

                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#6366f1"
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                    strokeWidth={3}
                                />

                            </AreaChart>

                        </ResponsiveContainer>

                    </div>
                </Card>

                {/* SIDE PANEL */}
                <div className="space-y-6">

                    {/* DEVICES */}
                    <Card>

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-semibold text-white">
                                    Dispositivos
                                </h3>

                                <p className="text-sm text-zinc-500 mt-1">
                                    Distribución de tráfico
                                </p>
                            </div>
                        </div>

                        <div className="h-[220px]">

                            <ResponsiveContainer width="100%" height="100%">

                                <PieChart>

                                    <Pie
                                        data={DEVICE_DATA}
                                        innerRadius={65}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >

                                        {DEVICE_DATA.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}

                                    </Pie>

                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#09090b',
                                            border: '1px solid #27272a',
                                            borderRadius: '14px'
                                        }}
                                    />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                        <div className="space-y-3 mt-4">

                            {DEVICE_DATA.map((d, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between"
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{ backgroundColor: d.color }}
                                        />

                                        <span className="text-sm text-zinc-400">
                                            {d.name}
                                        </span>

                                    </div>

                                    <span className="text-white font-semibold">
                                        {d.value}%
                                    </span>

                                </div>
                            ))}

                        </div>

                    </Card>

                    {/* TOP CLIENTS */}
                    <Card>

                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <h3 className="font-semibold text-white">
                                    Top Clientes
                                </h3>

                                <p className="text-sm text-zinc-500 mt-1">
                                    Mayor revenue generado
                                </p>
                            </div>

                        </div>

                        <div className="space-y-4">

                            {MOCK_CUSTOMERS.slice(0, 4).map((customer) => (

                                <div
                                    key={customer.id}
                                    className="flex items-center justify-between"
                                >

                                    <div>
                                        <p className="text-sm font-medium text-white">
                                            {customer.name}
                                        </p>

                                        <p className="text-xs text-zinc-500">
                                            {customer.plan}
                                        </p>
                                    </div>

                                    <span className="text-sm font-bold text-emerald-400">
                                        {customer.spent}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </Card>

                </div>
            </div>
        </div>
    );
};