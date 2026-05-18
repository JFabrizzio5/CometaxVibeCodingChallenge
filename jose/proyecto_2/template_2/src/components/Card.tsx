const COLORS = {
  primary: 'sky-600',
  primaryHover: 'sky-700',
  accent: 'emerald-500',
  background: 'bg-slate-50/50',
  surface: 'bg-white',
  border: 'border-slate-200/60',
};

export const Card = ({ children, title, subtitle, footer, className = "" }: any) => (
  <div className={`${COLORS.surface} border ${COLORS.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {(title || subtitle) && (
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        {title && <h3 className="text-lg font-black text-slate-800 dark:text-white tracking-tight">{title}</h3>}
        {subtitle && <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">{subtitle}</p>}
      </div>
    )}
    <div className="p-6">{children}</div>
    {footer && <div className="px-6 py-4 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800">{footer}</div>}
  </div>
);