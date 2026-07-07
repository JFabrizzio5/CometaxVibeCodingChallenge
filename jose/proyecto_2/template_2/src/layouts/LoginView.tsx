import { Card, Button } from '../components';
import {
  Mail,
  Lock,
  Leaf,
  X
} from 'lucide-react';

export const LoginView = ({ onLogin, onBack }: any) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50/50 p-6">
    <div className="w-full max-w-md relative">
      <div className="text-center mb-8">
        <button onClick={onBack} className='absolute top-5 right-5 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-200 transition-all duration-300 shadow-sm'>
          <X size={24}/>
        </button>
        <div className="w-16 h-16 bg-gradient-to-tr from-sky-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-sky-200 mx-auto mb-4">
          <Leaf size={32} fill="currentColor" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Bienvenido</h2>
        <p className="text-slate-400 font-medium mt-1">Tu espacio de trabajo te espera</p>
      </div>

      <Card className="shadow-2xl shadow-sky-100/50 border-none px-2 py-4">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">Email corporativo</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="email" placeholder="hola@empresa.com" className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-100 focus:border-sky-400 focus:bg-white rounded-2xl transition-all outline-none font-medium" required />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-black text-slate-500 uppercase tracking-wider">Contraseña</label>
              <a href="#" className="text-xs font-bold text-sky-600 hover:underline">¿Ayuda?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-100 focus:border-sky-400 focus:bg-white rounded-2xl transition-all outline-none font-medium" required />
            </div>
          </div>
          <Button type="submit" className="w-full py-4 text-md shadow-lg shadow-sky-100">Ingresar al Sistema</Button>
        </form>
      </Card>
    </div>
  </div>
);