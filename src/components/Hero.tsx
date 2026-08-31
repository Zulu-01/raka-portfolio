import { Instagram, Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import PinballOrbs from "@/components/PinballOrbs";

const profilePhoto = "/lovable-uploads/d1ee4d0f-a426-4212-860e-2fc4d34f59bb.png";

const socials = [
  { label: "Instagram", icon: Instagram, url: "https://www.instagram.com/raka_s.w.a.t/" },
  { label: "GitHub", icon: Github, url: "https://github.com/Zulu-11" },
  { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/" }
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);


  // Gentle parallax: background drifts slower than the content
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrollY(window.scrollY);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-background">
      {/* Colour orbs pinballing off the walls of this section, like a closed box */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0)` }}
      >
        <PinballOrbs />
      </div>

      {/* Dotted grid + gradient overlays */}
      <div className="absolute inset-0 grid-backdrop opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>


      {/* Drifting ambient blobs */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-gradient-primary rounded-full opacity-20 blur-3xl animate-blob-drift"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-accent/30 rounded-full opacity-20 blur-3xl animate-blob-drift" style={{ animationDelay: '4s' }}></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 600) }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Reveal direction="down" duration={600}>
                <span className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium backdrop-blur-sm animate-glow-pulse">
                  Available for Work
                </span>
              </Reveal>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                <Reveal direction="up" delay={80} as="span" className="block">Hello, I'm</Reveal>
                <Reveal direction="up" delay={180} as="span" className="block gradient-text">Raka Satya</Reveal>
                <Reveal direction="up" delay={280} as="span" className="block text-muted-foreground text-4xl sm:text-5xl lg:text-6xl">
                  Wurya Andhika
                </Reveal>
              </h1>

              <Reveal direction="up" delay={380}>
                <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-lg">
                  Creative Web Developer crafting digital experiences with modern technologies
                </p>
              </Reveal>
            </div>

            {/* Social Links */}
            <Reveal direction="up" delay={480}>
              <div className="flex items-center space-x-4 pt-4">
                {socials.map(({ label, icon: Icon, url }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    aria-label={label}
                    className="w-12 h-12 rounded-xl hover:bg-muted/20 glass-card fluid-card"
                    onClick={() => window.open(url, '_blank')}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Content - Profile Image */}
          <Reveal direction="scale" delay={200} duration={900} className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-6 bg-gradient-primary rounded-full opacity-25 blur-3xl group-hover:opacity-40 transition-opacity duration-700 animate-glow-pulse"></div>

              <div
                className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
                style={{ transform: `translate3d(0, ${scrollY * -0.06}px, 0)` }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden glass-card fluid-card">
                  <img
                    src={profilePhoto}
                    alt="Raka Satya Wurya Andhika"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
