import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const SettingsView = () => (
  <div className="max-w-3xl space-y-8 animate-in fade-in duration-500">
    <div>
      <h1 className="text-3xl font-bold text-white tracking-tight">Configuración</h1>
      <p className="text-zinc-500 text-sm">Gestiona tu cuenta y preferencias del sistema.</p>
    </div>

    <Card>
      <h3 className="text-lg font-semibold text-white mb-6">Perfil</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Nombre Completo</label>
            <input type="text" defaultValue="Alex Rivera" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Email</label>
            <input type="email" defaultValue="alex@example.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none" />
          </div>
        </div>
        <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
          <Button variant="secondary">Cancelar</Button>
          <Button>Guardar Cambios</Button>
        </div>
      </div>
    </Card>

    <Card>
      <h3 className="text-lg font-semibold text-white mb-4">Seguridad</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <div>
            <p className="text-sm font-medium text-white">Autenticación de Dos Factores</p>
            <p className="text-xs text-zinc-500">Añade una capa extra de seguridad.</p>
          </div>
          <div className="w-10 h-5 bg-zinc-800 rounded-full flex items-center px-1 cursor-pointer">
            <div className="w-3 h-3 bg-zinc-600 rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  </div>
);