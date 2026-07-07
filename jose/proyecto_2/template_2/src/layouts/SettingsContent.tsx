import { Button, Card } from "../components";
import {
  Camera,
  Shield,
  Bell,
  Palette,
  Lock,
  Trash2,
  ChevronRight
} from "lucide-react";

export const SettingsContent = () => (
  <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <span className="text-xs font-black text-emerald-500 uppercase tracking-widest block mb-2">
          Configuración
        </span>

        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
          Ajustes del Sistema
        </h1>

        <p className="text-slate-400 mt-3 font-medium max-w-xl">
          Administra tu perfil, preferencias y configuración general de la plataforma.
        </p>
      </div>

      <Button className="px-8 py-3 shadow-lg shadow-sky-100">
        Guardar Cambios
      </Button>
    </div>

    {/* Profile Card */}
    <Card className="border-none shadow-xl shadow-slate-100/50 overflow-hidden">

      <div className="p-8 border-b border-slate-100 bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">

          <div className="relative">
            <div className="w-24 h-24 rounded-[28px] overflow-hidden ring-4 ring-white shadow-lg bg-white">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="perfil"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all">
              <Camera size={18} />
            </button>
          </div>

          <div className="space-y-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Alex Rivera
              </h2>

              <p className="text-slate-500 font-medium">
                Director de Producto
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
              Cuenta Verificada
            </div>
          </div>

        </div>
      </div>

      {/* Form */}
      <div className="p-8 space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Nombre Completo
            </label>

            <input
              type="text"
              defaultValue="Alex Rivera"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-sky-300 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Cargo
            </label>

            <input
              type="text"
              defaultValue="Director de Producto"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-sky-300 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Correo Electrónico
            </label>

            <input
              type="email"
              defaultValue="alex@ecosystem.io"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-sky-300 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Teléfono
            </label>

            <input
              type="text"
              defaultValue="+52 33 1234 5678"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold outline-none focus:border-sky-300 focus:bg-white transition-all"
            />
          </div>

        </div>

      </div>
    </Card>

    {/* Preferences */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Notifications */}
      <Card className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
            <Bell size={22} />
          </div>

          <div>
            <h3 className="font-black text-slate-900">
              Notificaciones
            </h3>

            <p className="text-sm text-slate-400">
              Administra alertas y actividad.
            </p>
          </div>
        </div>

        <div className="space-y-4">

          {[
            "Alertas de seguridad",
            "Actualizaciones del sistema",
            "Resumen semanal"
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none"
            >
              <span className="font-bold text-sm text-slate-700">
                {item}
              </span>

              <div className="w-12 h-7 rounded-full bg-emerald-500 relative cursor-pointer">
                <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          ))}

        </div>
      </Card>

      {/* Security */}
      <Card className="space-y-6">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <Shield size={22} />
          </div>

          <div>
            <h3 className="font-black text-slate-900">
              Seguridad
            </h3>

            <p className="text-sm text-slate-400">
              Configuración de acceso y privacidad.
            </p>
          </div>
        </div>

        <div className="space-y-3">

          {[
            { icon: Lock, label: "Cambiar contraseña" },
            { icon: Shield, label: "Autenticación en dos pasos" },
            { icon: Palette, label: "Preferencias de apariencia" },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className="text-slate-400" />

                <span className="text-sm font-bold text-slate-700">
                  {item.label}
                </span>
              </div>

              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}

        </div>

      </Card>

    </div>

    {/* Danger Zone */}
    <Card className="border border-red-100 bg-red-50/50">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

        <div>
          <h3 className="text-lg font-black text-red-500">
            Zona de Riesgo
          </h3>

          <p className="text-sm text-red-400 mt-1 max-w-lg">
            Eliminar tu cuenta borrará permanentemente todos los datos asociados.
          </p>
        </div>

        <Button
          className="bg-red-500 hover:bg-red-600 text-white border-none"
        >
          <Trash2 size={16} />
          Eliminar Cuenta
        </Button>

      </div>

    </Card>

  </div>
);