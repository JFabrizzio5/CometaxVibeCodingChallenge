export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: any = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 border border-indigo-500/50',
    secondary: 'bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800',
    ghost: 'bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white',
    danger: 'bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20'
  };
  return (
    <button 
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};