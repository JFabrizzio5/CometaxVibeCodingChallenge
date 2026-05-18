import { Button, Badge, Card } from '../components';
import {
  Plus,
  MoreHorizontal
} from 'lucide-react';
import { PROJECTS_DATA } from '../mock/mock';

export const ProjectsContent = () => {

  return (
    <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
            Proyectos & Clientes
          </h1>

          <p className="text-slate-400 font-medium mt-1 text-sm md:text-base">
            Gestiona el progreso de tus proyectos activos.
          </p>
        </div>

        <Button
          variant="primary"
          className="w-full sm:w-auto justify-center"
        >
          <Plus size={18} />
          Registrar Cliente
        </Button>
      </div>

      {/* MOBILE CARDS */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {PROJECTS_DATA.map((p, i) => (
          <Card
            key={i}
            className="space-y-5 border border-slate-100 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 shrink-0 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center font-black text-sm">
                  {p.client[0]}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-black text-slate-800 truncate">
                    {p.name}
                  </p>

                  <p className="text-xs text-slate-400 font-bold truncate">
                    {p.client}
                  </p>
                </div>
              </div>

              <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-all shrink-0">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Estado
              </span>

              <Badge variant={p.color}>
                {p.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Progreso
                </span>

                <span className="text-xs font-black text-slate-500">
                  {p.progress}%
                </span>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${p.color === 'success'
                      ? 'bg-emerald-500'
                      : p.color === 'warning'
                        ? 'bg-amber-500'
                        : 'bg-sky-500'
                    }`}
                  style={{ width: `${p.progress}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <Card className="hidden md:block p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Proyecto / Cliente
                </th>

                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Estado
                </th>

                <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Progreso
                </th>

                <th className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody>
              {PROJECTS_DATA.map((p, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center font-black text-xs">
                        {p.client[0]}
                      </div>

                      <div>
                        <p className="text-sm font-black text-slate-800">
                          {p.name}
                        </p>

                        <p className="text-xs text-slate-400 font-bold">
                          {p.client}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <Badge variant={p.color}>
                      {p.status}
                    </Badge>
                  </td>

                  <td className="px-6 py-5 w-56">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${p.color === 'success'
                              ? 'bg-emerald-500'
                              : p.color === 'warning'
                                ? 'bg-amber-500'
                                : 'bg-sky-500'
                            }`}
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>

                      <span className="text-[10px] font-black text-slate-400">
                        {p.progress}%
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-300 hover:text-slate-600 transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};