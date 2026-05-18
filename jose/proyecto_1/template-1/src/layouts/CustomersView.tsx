import { Badge, Button, Card } from "../components";
import { MOCK_CUSTOMERS } from "../mock/mock";
import {
  Search,
  Filter,
  MoreHorizontal
} from 'lucide-react';

export const CustomersView = () => (
  <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-500">

    {/* HEADER */}
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Clientes
      </h1>

      <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            size={14}
          />

          <input
            type="text"
            placeholder="Buscar..."
            className="w-full sm:w-72 bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
          />
        </div>

        <Button
          variant="secondary"
          className="justify-center sm:w-auto w-full"
        >
          <Filter size={16} />
        </Button>

      </div>
    </div>

    {/* DESKTOP TABLE */}
    <Card className="hidden md:block p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-900/50 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 font-semibold text-zinc-400">
                Cliente
              </th>

              <th className="px-6 py-4 font-semibold text-zinc-400">
                Estado
              </th>

              <th className="px-6 py-4 font-semibold text-zinc-400">
                Plan
              </th>

              <th className="px-6 py-4 font-semibold text-zinc-400">
                Ingresos
              </th>

              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800/50">
            {MOCK_CUSTOMERS.map((c) => (
              <tr
                key={c.id}
                className="hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-white">
                    {c.name}
                  </div>

                  <div className="text-xs text-zinc-500">
                    {c.email}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <Badge
                    variant={
                      c.status === 'Active'
                        ? 'success'
                        : c.status === 'Trial'
                        ? 'warning'
                        : 'default'
                    }
                  >
                    {c.status}
                  </Badge>
                </td>

                <td className="px-6 py-4 text-zinc-400">
                  {c.plan}
                </td>

                <td className="px-6 py-4 text-zinc-300 font-medium">
                  {c.spent}
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-600 hover:text-white transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    {/* MOBILE CARDS */}
    <div className="grid gap-4 md:hidden">
      {MOCK_CUSTOMERS.map((c) => (
        <Card
          key={c.id}
          className="space-y-4"
        >
          <div className="flex items-start justify-between gap-4">

            <div className="min-w-0">
              <h3 className="font-semibold text-white truncate">
                {c.name}
              </h3>

              <p className="text-xs text-zinc-500 truncate">
                {c.email}
              </p>
            </div>

            <button className="text-zinc-600 hover:text-white transition-colors shrink-0">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              Estado
            </span>

            <Badge
              variant={
                c.status === 'Active'
                  ? 'success'
                  : c.status === 'Trial'
                  ? 'warning'
                  : 'default'
              }
            >
              {c.status}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              Plan
            </span>

            <span className="text-sm text-zinc-300">
              {c.plan}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              Ingresos
            </span>

            <span className="font-medium text-white">
              {c.spent}
            </span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);