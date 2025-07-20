import { Building, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hidgemsImage from "@/assets/hidgems-indo.jpg";
import cendrawasihImage from "@/assets/cendrawasih-school.jpg";
import elearningImage from "@/assets/elearning-app.jpg";

const Projects = () => {
  const projects = [
    {
      title: "HidGems Indo",
      description: "A frontend website that made with HTML, CSS, JavaScript language with Framework ReactJS",
      image: hidgemsImage,
      sourceLink: "https://github.com/JoyAbadi31/HidGemsIndonesia"
    },
    {
      title: "Cendrawasih School", 
      description: "A fullstack website that made with PHP language with Framework Laravel",
      image: cendrawasihImage,
      sourceLink: "https://github.com/AdliGR/Project_UAS_Cendrawasih"
    },
    {
      title: "E-learning App",
      description: "A cross-platform educational application for online learning and course management",
      image: elearningImage,
      sourceLink: "https://github.com/richbruh/uas-crossplat"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Featured
              <span className="gradient-text block">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my creative development journey and technical skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group glass-card rounded-2xl overflow-hidden hover-lift animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow"
                      onClick={() => window.open(project.sourceLink, '_blank')}
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                      onClick={() => window.open(project.sourceLink, '_blank')}
                    >
                      View Project →
                    </Button>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span>Live Project</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow hover-lift px-8 py-4 text-lg font-medium"
              onClick={() => window.location.href = '/projects'}
            >
              <span className="mr-2">Explore All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;