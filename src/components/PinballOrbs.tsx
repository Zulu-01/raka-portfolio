import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
}

/**
 * Colourful orbs that bounce around inside their container, as if
 * trapped in a box. Rendered on a canvas for smooth 60fps motion.
 */
const PinballOrbs = ({ count = 7 }: { count?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let orbs: Orb[] = [];
    let frame = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      orbs = Array.from({ length: count }, (_, i) => {
        const r = 90 + Math.random() * 130;
        const speed = 0.35 + Math.random() * 0.55;
        const angle = Math.random() * Math.PI * 2;
        return {
          x: r + Math.random() * Math.max(1, width - r * 2),
          y: r + Math.random() * Math.max(1, height - r * 2),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r,
          hue: [262, 292, 218, 322, 250, 200, 280][i % 7],
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const orb of orbs) {
        if (!reduceMotion) {
          orb.x += orb.vx;
          orb.y += orb.vy;

          // Bounce off the walls of the "box"
          if (orb.x - orb.r <= 0) {
            orb.x = orb.r;
            orb.vx = Math.abs(orb.vx);
          } else if (orb.x + orb.r >= width) {
            orb.x = width - orb.r;
            orb.vx = -Math.abs(orb.vx);
          }
          if (orb.y - orb.r <= 0) {
            orb.y = orb.r;
            orb.vy = Math.abs(orb.vy);
          } else if (orb.y + orb.r >= height) {
            orb.y = height - orb.r;
            orb.vy = -Math.abs(orb.vy);
          }
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, `hsla(${orb.hue}, 85%, 62%, 0.55)`);
        gradient.addColorStop(0.55, `hsla(${orb.hue}, 85%, 58%, 0.18)`);
        gradient.addColorStop(1, `hsla(${orb.hue}, 85%, 55%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default PinballOrbs;
