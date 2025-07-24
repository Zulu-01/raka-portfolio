import { User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import JSZip from 'jszip';

const About = () => {
  const downloadCV = async () => {
  try {
    const response = await fetch('/lovable-uploads/Raka Satya Wurya Andhika.pdf');
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Raka_Satya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Error downloading CV PDF:', error);
  }
};

  };
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <User className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Passionate About
              <span className="gradient-text block">Creative Development</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 sm:p-12 rounded-2xl hover-lift animate-scale-in">
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A student who is eager to learn new things, willing to take on challenges, and responsible in completing assigned tasks. Currently, I am deepening my knowledge in the field of Computer Science through university studies and online courses.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In my studies in Computer Science, I am particularly interested in UI/UX Design and Web Development. I have a talent for Web Development, with analytical skills, creativity in designing interfaces, and an understanding of modern web technologies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have experience in designing responsive and functional web solutions, both individually and as part of a professional team.
                </p>

                <div className="pt-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow hover-lift px-8 py-4 text-lg font-medium"
                    onClick={downloadCV}
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {[
                { label: "Years of Learning", value: "3+", desc: "Continuous learning in web development" },
                { label: "Projects Completed", value: "15+", desc: "From concept to deployment" },
                { label: "Technologies", value: "10+", desc: "Modern web development stack" },
                { label: "Team Projects", value: "5+", desc: "Collaborative development experience" }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover-lift" style={{animationDelay: `${0.1 * index}s`}}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-heading font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
