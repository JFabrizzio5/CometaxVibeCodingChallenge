import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Settings,
  BarChart3,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  Leaf,
  Briefcase
} from 'lucide-react';
import {
  AnalyticsContent,
  DashboardContent,
  LandingView,
  LoginView,
  ProjectsContent,
  SettingsContent
} from './layouts';
import { Sidebar } from './components';

// --- Constantes de Tema ---
const COLORS = {
  primary: 'sky-600',
  primaryHover: 'sky-700',
  accent: 'emerald-500',
  background: 'bg-slate-50/50',
  surface: 'bg-white',
  border: 'border-slate-200/60',
};

// --- Aplicación Principal ---
const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentView === 'landing') return <LandingView onLogin={() => setCurrentView('login')} />;
  if (currentView === 'login') return <LoginView onLogin={() => setCurrentView('dashboard')} onBack={() => setCurrentView('landing')} />;

  return (
    <div className={`min-h-screen ${COLORS.background} flex flex-col md:flex-row transition-colors duration-500`}>

      {/* Sidebar Navigation */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {
        sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40"
          />
        )
      }

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className={`sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'} px-8 h-20 flex items-center justify-between`}>
          <div className="flex items-center gap-4 flex-1">
            <div>
              <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                <Menu size={20} className="text-slate-600" />
              </button>
            </div>
            <div className="relative w-full max-w-sm hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input
                type="text"
                placeholder="Buscar datos..."
                className="w-full pl-12 pr-4 py-2.5 bg-white/50 border border-slate-100 focus:border-sky-200 rounded-2xl text-xs font-bold transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="p-2 text-slate-400 hover:text-sky-600 relative transition-all">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden lg:block">
                <p className="text-[10px] font-black text-slate-900 leading-none">Alex Rivera</p>
                <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-tighter mt-1">Admin Pro</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 p-0.5 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="rounded-[14px]" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12 max-w-7xl w-full mx-auto">
          {currentView === 'dashboard' && <DashboardContent />}
          {currentView === 'analytics' && <AnalyticsContent />}
          {currentView === 'projects' && <ProjectsContent />}
          {currentView === 'settings' && <SettingsContent />}
        </div>
      </main>
    </div>
  );
};

export default App;