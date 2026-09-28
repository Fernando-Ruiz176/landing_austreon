import { useEffect, useRef } from "react";

export default function BackgroundConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width: number, height: number;
    let points: any[] = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Recrear partículas al cambiar tamaño
      points = [];
      const numPoints = 100;

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3.8 + 2.5,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Respeta la preferencia de "reducir movimiento" del sistema: dibuja un solo
    // cuadro fijo en vez de animar sin parar.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      ctx.fillStyle = prefersReducedMotion ? "rgba(3, 7, 22, 1)" : "rgba(3, 7, 22, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Partículas redondas
      points.forEach(p => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#5a9cff";
        ctx.shadowBlur = 0;           // Sin nube azul
        ctx.fill();
      });

      // Conexiones
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 175) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(90, 158, 255, ${Math.max(0.03, (1 - dist / 175) * 0.3)})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}