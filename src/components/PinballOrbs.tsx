import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  life: number; // 1 = permanent, otherwise fades out
}

const HUES = [262, 292, 218, 322, 250, 200, 280];

/**
 * Interactive multi-ball pinball field: balls bounce off the walls of their
 * container and off each other, get pushed around by the cursor, and new balls
 * can be launched by clicking inside the section.
 */
const PinballOrbs = ({ count = 14 }: { count?: number }) => {
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
    const pointer = { x: -9999, y: -9999, active: false };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const makeOrb = (i: number, x?: number, y?: number, speed?: number): Orb => {
      const r = 26 + Math.random() * 54;
      const s = speed ?? 0.9 + Math.random() * 1.6;
      const angle = Math.random() * Math.PI * 2;
      return {
        x: x ?? r + Math.random() * Math.max(1, width - r * 2),
        y: y ?? r + Math.random() * Math.max(1, height - r * 2),
        vx: Math.cos(angle) * s,
        vy: Math.sin(angle) * s,
        r,
        hue: HUES[i % HUES.length],
        life: 1,
      };
    };

    const seed = () => {
      orbs = Array.from({ length: count }, (_, i) => makeOrb(i));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!orbs.length) seed();
    };

    resize();
    seed();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const inside = (p: { x: number; y: number }) =>
      p.x >= 0 && p.y >= 0 && p.x <= width && p.y <= height;

    const onMove = (e: PointerEvent) => {
      const p = toLocal(e.clientX, e.clientY);
      pointer.x = p.x;
      pointer.y = p.y;
      pointer.active = inside(p);
    };

    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onClick = (e: PointerEvent) => {
      const p = toLocal(e.clientX, e.clientY);
      if (!inside(p)) return;
      // Launch a small burst of temporary balls from the click point
      for (let i = 0; i < 3; i++) {
        const orb = makeOrb(Math.floor(Math.random() * HUES.length), p.x, p.y, 2.4 + Math.random() * 2);
        orb.r = 18 + Math.random() * 26;
        orb.life = 0.999;
        orbs.push(orb);
      }
      if (orbs.length > count + 24) orbs.splice(count, orbs.length - (count + 24));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    const collide = (a: Orb, b: Orb) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 0.001;
      const min = a.r + b.r;
      if (dist >= min) return;

      const nx = dx / dist;
      const ny = dy / dist;
      const overlap = (min - dist) / 2;
      a.x -= nx * overlap;
      a.y -= ny * overlap;
      b.x += nx * overlap;
      b.y += ny * overlap;

      // Equal-mass elastic response along the collision normal
      const rvx = b.vx - a.vx;
      const rvy = b.vy - a.vy;
      const sep = rvx * nx + rvy * ny;
      if (sep > 0) return;
      const imp = sep * 0.92;
      a.vx += imp * nx;
      a.vy += imp * ny;
      b.vx -= imp * nx;
      b.vy -= imp * ny;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const orb of orbs) {
          // Cursor repulsion
          if (pointer.active) {
            const dx = orb.x - pointer.x;
            const dy = orb.y - pointer.y;
            const dist = Math.hypot(dx, dy) || 0.001;
            const reach = orb.r + 160;
            if (dist < reach) {
              const force = (1 - dist / reach) * 0.9;
              orb.vx += (dx / dist) * force;
              orb.vy += (dy / dist) * force;
            }
          }

          orb.x += orb.vx;
          orb.y += orb.vy;

          // Friction + speed clamp so the field stays lively but controlled
          orb.vx *= 0.995;
          orb.vy *= 0.995;
          const sp = Math.hypot(orb.vx, orb.vy);
          const max = 6;
          if (sp > max) {
            orb.vx = (orb.vx / sp) * max;
            orb.vy = (orb.vy / sp) * max;
          } else if (sp < 0.35) {
            const a = Math.random() * Math.PI * 2;
            orb.vx += Math.cos(a) * 0.12;
            orb.vy += Math.sin(a) * 0.12;
          }

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

        for (let i = 0; i < orbs.length; i++) {
          for (let j = i + 1; j < orbs.length; j++) collide(orbs[i], orbs[j]);
        }

        // Fade out and retire the temporary click-spawned balls
        for (const orb of orbs) {
          if (orb.life < 1) orb.life -= 0.0035;
        }
        orbs = orbs.filter((o) => o.life > 0);
      }

      for (const orb of orbs) {
        const alpha = orb.life < 1 ? Math.max(0, orb.life) : 1;

        // Soft glow halo
        const halo = ctx.createRadialGradient(orb.x, orb.y, orb.r * 0.2, orb.x, orb.y, orb.r * 2.4);
        halo.addColorStop(0, `hsla(${orb.hue}, 90%, 62%, ${0.28 * alpha})`);
        halo.addColorStop(1, `hsla(${orb.hue}, 90%, 55%, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Ball body with a highlight for a glossy pinball feel
        const body = ctx.createRadialGradient(
          orb.x - orb.r * 0.35,
          orb.y - orb.r * 0.35,
          orb.r * 0.1,
          orb.x,
          orb.y,
          orb.r
        );
        body.addColorStop(0, `hsla(${orb.hue}, 95%, 78%, ${0.75 * alpha})`);
        body.addColorStop(0.55, `hsla(${orb.hue}, 88%, 58%, ${0.42 * alpha})`);
        body.addColorStop(1, `hsla(${orb.hue}, 85%, 45%, ${0.1 * alpha})`);
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `hsla(${orb.hue}, 95%, 78%, ${0.35 * alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      window.removeEventListener("pointerleave", onLeave);
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
