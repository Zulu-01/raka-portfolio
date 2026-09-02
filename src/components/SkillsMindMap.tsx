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

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

interface MindMapProps {
  categories: MindMapCategory[];
}

const SkillsMindMap = ({ categories }: MindMapProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % categories.length);
    }, 4200);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, categories.length]);

  const layout = useMemo(
    () =>
      categories.map((category, index) => {
        const angle = (index / categories.length) * Math.PI * 2 - Math.PI / 2;
        const x = 0.5 + 0.33 * Math.cos(angle);
        const y = 0.5 + 0.34 * Math.sin(angle);

        const leaves = category.skills.map((skill, leafIndex) => {
          const spread = Math.PI / 3;
          const step = category.skills.length > 1 ? spread / (category.skills.length - 1) : 0;
          const leafAngle = angle - spread / 2 + step * leafIndex;
          return {
            skill,
            x: clamp(x + 0.15 * Math.cos(leafAngle), 0.08, 0.92),
            y: clamp(y + 0.17 * Math.sin(leafAngle), 0.06, 0.94),
          };
        });

        return { ...category, angle, x, y, leaves };
      }),
    [categories]
  );

  return (
    <div
      className="glass-card relative w-full overflow-hidden rounded-3xl p-4 sm:p-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[520px] w-full sm:h-[580px] lg:h-[640px]">
        {/* connection lines */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {layout.map((node, index) => {
            const isActive = index === active;
            return (
              <g key={node.title}>
                <line
                  x1={50}
                  y1={50}
                  x2={node.x * 100}
                  y2={node.y * 100}
                  stroke="hsl(var(--primary))"
                  strokeWidth={isActive ? 0.35 : 0.16}
                  strokeOpacity={isActive ? 0.85 : 0.28}
                  strokeDasharray="2 1.4"
                  className={isActive ? "mindmap-flow" : undefined}
                  vectorEffect="non-scaling-stroke"
                />
                {isActive &&
                  node.leaves.map((leaf) => (
                    <line
                      key={leaf.skill}
                      x1={node.x * 100}
                      y1={node.y * 100}
                      x2={leaf.x * 100}
                      y2={leaf.y * 100}
                      stroke="hsl(var(--primary))"
                      strokeWidth={0.16}
                      strokeOpacity={0.5}
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
              </g>
            );
          })}
        </svg>

        {/* center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 shadow-glow">
            <span className="absolute -inset-3 -z-10 animate-glow-pulse rounded-3xl" />
            <Braces className="h-6 w-6 text-primary-foreground" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground sm:text-base">
              Tech Arsenal
            </span>
          </div>
        </div>

        {/* category nodes + leaves */}
        {layout.map((node, index) => {
          const isActive = index === active;
          const Icon = categoryIcon[node.title] ?? Sparkles;

          return (
            <div key={node.title}>
              <button
                type="button"
                onClick={() => setActive(index)}
                style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}
                className={cn(
                  "absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-left transition-all duration-500",
                  "flex items-center gap-2 backdrop-blur-md",
                  isActive
                    ? "scale-110 border-primary/70 bg-primary/15 shadow-glow"
                    : "border-border/60 bg-card/70 hover:border-primary/50 hover:scale-105"
                )}
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-500",
                    isActive ? "bg-gradient-primary" : "bg-muted"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isActive ? "text-primary-foreground" : "text-primary")} />
                </span>
                <span
                  className={cn(
                    "font-heading text-xs font-bold sm:text-sm",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {node.title}
                </span>
              </button>

              {node.leaves.map((leaf, leafIndex) => (
                <span
                  key={leaf.skill}
                  style={{
                    left: `${leaf.x * 100}%`,
                    top: `${leaf.y * 100}%`,
                    transitionDelay: isActive ? `${leafIndex * 70}ms` : "0ms",
                  }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-background/85 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-all duration-500 sm:text-xs",
                    isActive ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"
                  )}
                >
                  {leaf.skill}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-center text-xs text-muted-foreground">
        Click a branch to explore it — the map rotates automatically and pauses while you hover.
      </p>
    </div>
  );
};

export default SkillsMindMap;
