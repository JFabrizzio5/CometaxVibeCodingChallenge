import {
    LayoutDashboard,
    Settings,
    BarChart3,
    X,
    LogOut,
    Leaf,
    Briefcase
} from 'lucide-react';

const menuItems = [
    { id: 'dashboard', label: 'Resumen', icon: LayoutDashboard },
    { id: 'analytics', label: 'Métricas', icon: BarChart3 },
    { id: 'projects', label: 'Proyectos', icon: Briefcase },
    { id: 'settings', label: 'Preferencias', icon: Settings },
];

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    currentView: string;
    setCurrentView: (value: string) => void;
}

export const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
    currentView,
    setCurrentView
}: SidebarProps) => {

    return (
        <aside
            className={`
        fixed top-0 left-0 z-40 h-screen w-72 shrink-0 bg-white border-r border-slate-200/60
        transform transition-transform duration-500 ease-in-out z-50
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
        >
            <div className="flex flex-col h-screen">

                {/* Logo */}
                <div className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-100">
                            <Leaf size={22} fill="currentColor" />
                        </div>

                        <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">
                            ECO<span className="text-emerald-500">SYSTEM</span>
                        </span>
                    </div>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 space-y-1.5">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em] px-4 mb-4 mt-4">
                        Navegación
                    </div>

                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentView(item.id)}
                            className={`
                w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300
                ${currentView === item.id
                                    ? 'bg-sky-50 text-sky-600 font-black shadow-sm shadow-sky-50/50'
                                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}
              `}
                        >
                            <item.icon size={20} />

                            <span className="text-sm tracking-tight">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-6">
                    <button
                        onClick={() => setCurrentView('landing')}
                        className="w-full flex items-center gap-3 p-4 rounded-2xl text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all font-bold text-sm"
                    >
                        <LogOut size={18} />
                        Cerrar Sesión
                    </button>
                </div>

            </div>
        </aside>
    );
};