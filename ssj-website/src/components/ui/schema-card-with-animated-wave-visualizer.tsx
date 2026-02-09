import React, { useEffect, useRef } from 'react';
import { ArrowRight, Database } from 'lucide-react';

export default function SchemaCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;
        const waveData = Array.from({ length: 8 }).map(() => ({
            value: Math.random() * 0.5 + 0.1,
            targetValue: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.02 + 0.01
        }));

        let animationFrameId: number;

        function resizeCanvas() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function updateWaveData() {
            waveData.forEach(data => {
                if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
                const diff = data.targetValue - data.value;
                data.value += diff * data.speed;
            });
        }

        function draw() {
            if (!ctx || !canvas) return;
            // Use a transparent or dark background compatible with the theme
            // The original code used 'black', but we might want it to blend. 
            // For now, I'll keep 'black' as requested but maybe with some opacity or just clear if it's an overlay?
            // "ctx.fillStyle = 'black'; ctx.fillRect(0, 0, canvas.width, canvas.height);"
            // If this is a card ON TOP of a page, filling the whole screen with black might be aggressive.
            // The original component had "className='fixed inset-0 w-full h-full'" which implies a full screen background.
            // I will keep it as 'black' per the snippet, but user might want to adjust this.
            ctx.fillStyle = '#1C1917'; // Matching --primary from index.css
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            waveData.forEach((data, i) => {
                const freq = data.value * 7;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const nx = (x / canvas.width) * 2 - 1;
                    const px = nx + i * 0.04 + freq * 0.03;
                    const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
                    const y = (py + 1) * canvas.height / 2;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const intensity = Math.min(1, freq * 0.3);
                const r = 79 + intensity * 100;
                const g = 70 + intensity * 130;
                const b = 229;
                ctx.lineWidth = 1 + i * 0.3;
                ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
                ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
                ctx.shadowBlur = 5;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
        }

        function animate() {
            time += 0.02;
            updateWaveData();
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
                <div className="w-full max-w-xs pointer-events-auto">
                    <div className="relative card-border bg-stone-900/50 overflow-hidden rounded-2xl flex flex-col animate-float backdrop-blur-sm">

                        {/* Card Header / Visual Area */}
                        <div className="p-4 flex justify-center relative">
                            <div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative">
                                {/* Animated grid background */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="w-full h-full animate-pulse" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                                </div>

                                {/* Floating Elements (Abstract Rep) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Database className="w-16 h-16 text-indigo-400 opacity-50 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* Card Content */}
                        <div className="p-4">
                            <span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">Database</span>
                            <h3 className="text-lg font-medium text-white mb-2">Schema Management</h3>
                            <p className="text-white/70 mb-4 leading-relaxed text-xs">
                                Design, optimize and maintain your database structure with powerful schema tools.
                            </p>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-indigo-400/30">
                                    Manage
                                    <ArrowRight className="w-3 h-3 ml-1" />
                                </a>
                                <span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">Live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
