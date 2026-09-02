import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Server, Database, Smartphone, Cloud, Wrench, Sparkles, Braces } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MindMapCategory {
  title: string;
  skills: string[];
}

const categoryIcon: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Mobile: Smartphone,
  Cloud: Cloud,
  Tools: Wrench,
  Others: Sparkles,
};

interface MindMapProps {
  categories: MindMapCategory[];
}

type Vec3 = { x: number; y: number; z: number };

const RADIUS = 1;
const LEAF_OFFSET = 0.55;
const PERSPECTIVE = 3.2;

/** Evenly distribute points on a sphere (fibonacci spiral). */
const spherePoints = (count: number): Vec3[] =>
  Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * 2.399963229728653;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });

const normalize = (v: Vec3): Vec3 => {
  const l = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / l, y: v.y / l, z: v.z / l };
};

const rotate = (v: Vec3, yaw: number, pitch: number): Vec3 => {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const x1 = v.x * cy - v.z * sy;
  const z1 = v.x * sy + v.z * cy;
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const y2 = v.y * cp - z1 * sp;
  const z2 = v.y * sp + z1 * cp;
  return { x: x1, y: y2, z: z2 };
};

const project = (v: Vec3) => {
  const scale = PERSPECTIVE / (PERSPECTIVE - v.z);
  return { left: 50 + v.x * 34 * scale, top: 50 + v.y * 34 * scale, scale, depth: v.z };
};

const SkillsMindMap = ({ categories }: MindMapProps) => {
  const [rotation, setRotation] = useState({ yaw: 0.4, pitch: -0.2 });
  const hovered = useRef(false);
  const dragging = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const velocity = useRef({ yaw: 0.22, pitch: 0.06 });
  const state = useRef({ yaw: 0.4, pitch: -0.2 });

  const nodes = useMemo(() => {
    const pts = spherePoints(categories.length);
    return categories.map((category, i) => {
      const base = normalize(pts[i]);
      const tangentA = normalize(
        Math.abs(base.y) < 0.9
          ? { x: -base.z, y: 0, z: base.x }
          : { x: 1, y: 0, z: 0 }
      );
      const tangentB = normalize({
        x: base.y * tangentA.z - base.z * tangentA.y,
        y: base.z * tangentA.x - base.x * tangentA.z,
        z: base.x * tangentA.y - base.y * tangentA.x,
      });
      const leaves = category.skills.map((skill, j) => {
        const a = (j / category.skills.length) * Math.PI * 2 + i;
        const dir = normalize({
          x: base.x + LEAF_OFFSET * (Math.cos(a) * tangentA.x + Math.sin(a) * tangentB.x),
          y: base.y + LEAF_OFFSET * (Math.cos(a) * tangentA.y + Math.sin(a) * tangentB.y),
          z: base.z + LEAF_OFFSET * (Math.cos(a) * tangentA.z + Math.sin(a) * tangentB.z),
        });
        return {
          skill,
          pos: { x: dir.x * (RADIUS * 1.45), y: dir.y * (RADIUS * 1.45), z: dir.z * (RADIUS * 1.45) },
        };
      });
      return { title: category.title, pos: base, leaves };
    });
  }, [categories]);

  useEffect(() => {
    let raf = 0;
    let prev = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!dragging.current) {
        const factor = hovered.current ? 0.2 : 1;
        state.current.yaw += velocity.current.yaw * factor * dt;
        state.current.pitch += velocity.current.pitch * factor * dt;
        // gentle omnidirectional wobble
        velocity.current.pitch = 0.16 * Math.sin(now / 4200);
        state.current.pitch = Math.max(-0.9, Math.min(0.9, state.current.pitch));
        setRotation({ yaw: state.current.yaw, pitch: state.current.pitch });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !last.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    state.current.yaw += dx * 0.006;
    state.current.pitch = Math.max(-1.1, Math.min(1.1, state.current.pitch + dy * 0.005));
    setRotation({ yaw: state.current.yaw, pitch: state.current.pitch });
  };

  const endDrag = () => {
    dragging.current = false;
    last.current = null;
  };

  const rendered = nodes.map((node) => {
    const p = project(rotate(node.pos, rotation.yaw, rotation.pitch));
    return {
      ...node,
      p,
      leaves: node.leaves.map((leaf) => ({
        ...leaf,
        p: project(rotate(leaf.pos, rotation.yaw, rotation.pitch)),
      })),
    };
  });

  return (
    <div
      className="glass-card relative w-full select-none overflow-hidden rounded-3xl p-4 sm:p-6"
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
    >
      <div
        className="relative h-[520px] w-full cursor-grab touch-none active:cursor-grabbing sm:h-[580px] lg:h-[640px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {rendered.map((node) => (
            <g key={node.title}>
              <line
                x1={50}
                y1={50}
                x2={node.p.left}
                y2={node.p.top}
                stroke="hsl(var(--primary))"
                strokeWidth={0.4}
                strokeOpacity={0.2 + 0.5 * ((node.p.depth + 1) / 2)}
                strokeDasharray="2 1.4"
                className="mindmap-flow"
                vectorEffect="non-scaling-stroke"
              />
              {node.leaves.map((leaf) => (
                <line
                  key={leaf.skill}
                  x1={node.p.left}
                  y1={node.p.top}
                  x2={leaf.p.left}
                  y2={leaf.p.top}
                  stroke="hsl(var(--primary))"
                  strokeWidth={0.2}
                  strokeOpacity={0.15 + 0.35 * ((leaf.p.depth + 1) / 2)}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
          ))}
        </svg>

        {/* center node */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 shadow-glow">
            <span className="absolute -inset-3 -z-10 animate-glow-pulse rounded-3xl" />
            <Braces className="h-6 w-6 text-primary-foreground" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground sm:text-base">
              Tech Arsenal
            </span>
          </div>
        </div>

        {rendered.map((node) => {
          const Icon = categoryIcon[node.title] ?? Sparkles;
          const front = node.p.depth > -0.2;
          return (
            <div key={node.title}>
              <div
                style={{
                  left: `${node.p.left}%`,
                  top: `${node.p.top}%`,
                  transform: `translate(-50%, -50%) scale(${node.p.scale.toFixed(3)})`,
                  opacity: front ? 1 : 0.45,
                  zIndex: Math.round(10 + node.p.depth * 5),
                }}
                className="pointer-events-none absolute flex items-center gap-2 rounded-xl border border-primary/50 bg-card/80 px-3 py-2 backdrop-blur-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="whitespace-nowrap font-heading text-xs font-bold text-foreground sm:text-sm">
                  {node.title}
                </span>
              </div>

              {node.leaves.map((leaf) => (
                <span
                  key={leaf.skill}
                  style={{
                    left: `${leaf.p.left}%`,
                    top: `${leaf.p.top}%`,
                    transform: `translate(-50%, -50%) scale(${leaf.p.scale.toFixed(3)})`,
                    opacity: leaf.p.depth > -0.2 ? 0.95 : 0.4,
                    zIndex: Math.round(5 + leaf.p.depth * 4),
                  }}
                  className="pointer-events-none absolute whitespace-nowrap rounded-full border border-primary/30 bg-background/85 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm sm:text-xs"
                >
                  {leaf.skill}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-center text-xs text-muted-foreground">
        Drag to spin the map in any direction — it rotates on its own and slows down while you hover.
      </p>
    </div>
  );
};

export default SkillsMindMap;
