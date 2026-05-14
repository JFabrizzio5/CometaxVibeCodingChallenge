export const Card = ({ children, className = '' }: any) => (
  <div className={`bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-md hover:border-zinc-700/50 transition-colors ${className}`}>
    {children}
  </div>
);