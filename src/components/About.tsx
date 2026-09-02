import { useEffect, useState } from "react";
import { User, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years of Learning", value: 4, suffix: "+", desc: "Continuous learning in web development" },
  { label: "Projects Completed", value: 4, suffix: "+", desc: "From concept to deployment" },
  { label: "Technologies", value: 10, suffix: "+", desc: "Modern web development stack" },
  { label: "Team Projects", value: 4, suffix: "+", desc: "Collaborative development experience" },
];

const education = [
  {
    school: "Universitas Multimedia Nusantara",
    major: "Informatics",
    detail: "Current GPA: 3.26",
    period: "2022 — 2026",
  },
  {
    school: "SMAN 85 Jakarta",
    major: "Science Major (MIA)",
    detail: "Grade: 80,32",
    period: "2019 — 2022",
  },
];

const SLIDE_DURATION = 7000;

const About = () => {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setSlide((s) => (s + 1) % 2), SLIDE_DURATION);
    return () => window.clearTimeout(id);
  }, [slide, paused]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Raka_Satya_Wurya_Andhika_CV.pdf';
    link.download = 'Raka_Satya_Wurya_Andhika_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden scroll-mt-20">
      {/* Background accent */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <User className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Passionate About
              <span className="gradient-text block">Creative Development</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" className="glass-card p-8 sm:p-12 rounded-2xl fluid-card">
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A fresh graduate in Informatics who is eager to learn new things, willing to take on challenges, and responsible in completing assigned tasks. I am particularly having a strong passion in UI/UX Design, Software Engineering and Web Development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through both academic and personal projects, I have developed responsive and user-friendly web applications using React.js, Next.js and other modern web technologies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a responsible, disciplined, inquisitive and fast-learning individual who enjoys solving problems, collaborating in teams, and continuously learning new things. I am eager to apply my technical skills and contribute to developing creative software solutions while growing professionally in the IT industry.
                </p>


                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow fluid-card px-8 py-4 text-lg font-medium"
                    onClick={downloadCV}
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </Reveal>

            <div
              className="space-y-6"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="relative min-h-[520px]">
                {/* Sub-page 1 — quick stats */}
                <div
                  className={cn(
                    "space-y-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    slide === 0
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none absolute inset-0"
                  )}
                  aria-hidden={slide !== 0}
                >
                  {stats.map((stat, index) => (
                    <Reveal key={stat.label} direction="right" delay={index * 120} className="glass-card p-6 rounded-xl fluid-card">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-heading font-bold gradient-text">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                          <p className="text-sm text-muted-foreground">{stat.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Sub-page 2 — education timeline */}
                <div
                  className={cn(
                    "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    slide === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
                  )}
                  aria-hidden={slide !== 1}
                >
                  <div className="glass-card rounded-2xl p-6 sm:p-8 fluid-card">
                    <div className="flex items-center gap-3 mb-8">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                        Education
                      </span>
                    </div>

                    <div className="relative pl-6 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-primary">
                      {education.map((item) => (
                        <div key={item.school} className="relative">
                          <span className="absolute -left-[1.6rem] top-2 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-heading font-semibold text-foreground">{item.school}</h3>
                            <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                          </div>
                          <p className="text-sm text-primary mt-1">{item.major}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Manual controls */}
              <div className="flex items-center justify-center gap-3">
                {["Highlights", "Education"].map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSlide(index)}
                    aria-label={`Show ${label}`}
                    aria-current={slide === index}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
                      slide === index
                        ? "bg-gradient-primary text-white shadow-glow"
                        : "glass-card text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
