import { User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const About = () => {
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

            <div className="space-y-8">
              {[
                { label: "Years of Learning", value: 4, suffix: "+", desc: "Continuous learning in web development" },
                { label: "Projects Completed", value: 4, suffix: "+", desc: "From concept to deployment" },
                { label: "Technologies", value: 10, suffix: "+", desc: "Modern web development stack" },
                { label: "Team Projects", value: 4, suffix: "+", desc: "Collaborative development experience" }

              ].map((stat, index) => (
                <Reveal key={index} direction="right" delay={index * 120} className="glass-card p-6 rounded-xl fluid-card">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
