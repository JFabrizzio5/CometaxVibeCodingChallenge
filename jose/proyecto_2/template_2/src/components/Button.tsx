export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: `bg-sky-600 text-white hover:bg-sky-700 shadow-sm shadow-sky-100`,
    secondary: 'bg-slate-800 text-slate-900 text-white border border-slate-700 hover:bg-slate-600',
    ghost: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-100'
  };
  
  return (
    <button 
      className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};