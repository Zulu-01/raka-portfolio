import { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the element travels from while revealing. */
  direction?: Direction;
  /** Delay in milliseconds. */
  delay?: number;
  /** Duration in milliseconds. */
  duration?: number;
  as?: ElementType;
}

const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "-translate-x-10",
  right: "translate-x-10",
  scale: "scale-95",
  fade: "",
};

const Reveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 700,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "will-change-transform motion-reduce:!opacity-100 motion-reduce:!transform-none",
        "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]",
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : `opacity-0 blur-[2px] ${hiddenByDirection[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
