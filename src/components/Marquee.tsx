import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Code2, Server, Database, Smartphone, Cloud, Wrench, Sparkles } from "lucide-react";
import { techInfo } from "@/data/tech";

interface MarqueeProps {
  items: string[];
  /** Seconds for a full loop. Higher is slower. */
  speed?: number;
  reverse?: boolean;
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

const Marquee = ({ items, speed = 32, reverse = false }: MarqueeProps) => {
  const track = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden py-4">
      <div
        className="marquee-track flex w-max gap-4 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((item, index) => {
          const info = techInfo[item];
          const Icon = info ? categoryIcon[info.category] ?? Sparkles : Sparkles;

          const chip = (
            <span
              tabIndex={0}
              className="marquee-chip glass-card cursor-help whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-muted-foreground outline-none transition-colors duration-300 hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item}
            </span>
          );


          if (!info) {
            return <span key={`${item}-${index}`}>{chip}</span>;
          }

          return (
            <HoverCard key={`${item}-${index}`} openDelay={120} closeDelay={80}>
              <HoverCardTrigger asChild>{chip}</HoverCardTrigger>
              <HoverCardContent
                side="top"
                align="center"
                className="w-80 border-border/40 bg-popover/95 p-5 text-left shadow-deep backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground">{info.name}</p>
                    <p className="text-xs text-primary">{info.category}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{info.summary}</p>

                <div className="mt-4 space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
                    Commonly used for
                  </p>
                  {info.usedFor.map((use) => (
                    <div key={use} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{use}</span>
                    </div>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
