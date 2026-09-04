import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center space-x-3">
            {socials.map(({ label, icon: Icon, url, color, colorTo }, i) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                aria-label={label}
                className="w-10 h-10 rounded-xl hover:bg-muted/20 glass-card fluid-card social-glow"
                style={{
                  "--glow-a": color,
                  "--glow-b": colorTo,
                  animationDelay: `${i * 0.9}s`,
                } as React.CSSProperties}
                onClick={() => window.open(url, "_blank")}
              >
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground tracking-wide order-last md:order-none">
            © {year} Raka Satya Wurya Andhika. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card fluid-card text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
