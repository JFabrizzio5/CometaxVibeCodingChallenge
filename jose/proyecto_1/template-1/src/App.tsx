import { useState, useEffect } from 'react';
import {
  Menu,
  Bell,
  ChevronRight,
  Search
} from 'lucide-react';
import { 
  AnalyticsView, 
  CustomersView, 
  DashboardView, 
  LandingPage, 
  LoginPage, 
  SettingsView 
} from './layouts';
import { Sidebar } from './components';

export default function App() {
  const [currentView, setView] = useState('landing');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    if (currentView === 'landing') return <LandingPage setView={setView} />;
    if (currentView === 'login') return <LoginPage setView={setView} />;

    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex overflow-x-hidden">
        <Sidebar
          currentView={currentView}
          setView={setView}
          isOpen={isSidebarOpen}
          toggle={() => setSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-1 lg:ml-64 min-h-screen transition-all duration-300">
          <header className="h-16 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-30 px-6 md:px-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors">
                <Menu size={20} />
              </button>
              <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-500">
                <span className="hover:text-zinc-300 cursor-pointer transition-colors">VibeSaaS</span>
                <ChevronRight size={12} />
                <span className="text-zinc-200 capitalize tracking-wide">{currentView}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950" />
              </button>
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center cursor-pointer hover:bg-zinc-800 transition-colors">
                <Search size={16} className="text-zinc-500" />
              </div>
            </div>
          </header>

          <div className="p-6 md:p-10 lg:p-12 max-w-[1400px] mx-auto">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'customers' && <CustomersView />}
            {currentView === 'settings' && <SettingsView />}
            {currentView === 'analytics' && <AnalyticsView />}
          </div>
        </main>
      </div>
    );
  };

  return (
    <div className="antialiased font-sans bg-zinc-950 min-h-screen w-full selection:bg-indigo-500/40">
      {renderContent()}
    </div>
  );
}