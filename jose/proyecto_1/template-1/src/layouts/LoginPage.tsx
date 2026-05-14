import { useState } from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { LoginBackground } from "../components/LoginBackground";
import {
    Zap,
    Mail,
    Lock,
    X
} from 'lucide-react';

export const LoginPage = ({ setView }: any) => {
    const [loading, setLoading] = useState(false);
    const handleLogin = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setView('dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            
            <LoginBackground />

            <button onClick={() => setView('landing')} className="absolute top-6 right-6 z-20 p-2 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all backdrop-blur-sm"><X size={22}/></button>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[400px] space-y-8 relative z-10">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 mb-4">
                        <Zap className="text-indigo-500 fill-current" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">VibeSaaS</h2>
                    <p className="text-zinc-500 mt-2">Introduce tus credenciales para acceder</p>
                </div>

                <Card className="shadow-2xl shadow-black/50">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                                <input
                                    required
                                    type="email"
                                    placeholder="alex@startup.com"
                                    className="w-full text-white bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 pl-10 text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Contraseña</label>
                                <a href="#" className="text-xs text-indigo-400 hover:underline">¿Olvidaste tu clave?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                                <input
                                    required
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full text-white bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 pl-10 text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full py-3 mt-4" disabled={loading}>
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : "Iniciar Sesión"}
                        </Button>
                    </form>

                    <div className="relative my-8 text-center">
                        <span className="bg-zinc-900 px-3 text-[10px] uppercase font-bold text-zinc-600 relative z-10 tracking-widest">O continúa con</span>
                        <div className="absolute top-1/2 w-full h-[1px] bg-zinc-800" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="secondary" className="text-xs py-2.5">GitHub</Button>
                        <Button variant="secondary" className="text-xs py-2.5">Google</Button>
                    </div>
                </Card>

                <p className="text-center text-sm text-zinc-500">
                    ¿No tienes cuenta? <a href="#" className="text-indigo-400 font-medium hover:underline">Crea una gratis</a>
                </p>
            </div>
        </div>
    );
};