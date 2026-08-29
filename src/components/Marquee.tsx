interface MarqueeProps {
  items: string[];
  /** Seconds for a full loop. Higher is slower. */
  speed?: number;
  reverse?: boolean;
}

const Marquee = ({ items, speed = 32, reverse = false }: MarqueeProps) => {
  const track = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden py-4">
      <div
        className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="glass-card whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
