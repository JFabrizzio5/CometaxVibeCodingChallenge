export const Badge = ({ children, variant = 'default' }: any) => {
  const styles: any = {
    default: 'bg-zinc-800 text-zinc-400 border border-zinc-700/50',
    success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
    error: 'bg-red-500/10 text-red-500 border border-red-500/20',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold ${styles[variant]}`}>
      {children}
    </span>
  );
};