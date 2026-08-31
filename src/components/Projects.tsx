import { useState } from "react";
import { Building, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import hidgemsImage from "@/assets/hidgems-indo.jpg";
import cendrawasihImage from "@/assets/cendrawasih-school.jpg";
import elearningImage from "@/assets/elearning-app.jpg";
import baduyImage from "@/assets/baduy-website.png";


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

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
    },
    {
      title: "Baduy's Website",
      description: "A website informing the public about the life, culture, and traditional values of the Baduy people, while also serving as a platform for marketing traditional Baduy products. Built with PHP, Laravel and MySQL.",
      image: baduyImage,
      sourceLink: "https://github.com/wilbertb32/baduy_new_temporarycompleted_v3_indo"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);


  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden scroll-mt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-20">
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
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {visibleProjects.map((project, index) => (

              <Reveal
                key={index}
                direction="up"
                delay={index * 140}
                className="group glass-card rounded-2xl overflow-hidden fluid-card"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center" delay={60}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll((prev) => !prev)}
              className="border-2 border-muted-foreground/20 hover:border-primary hover:bg-primary/5 fluid-card animated-border"
            >
              <span className="mr-2">{showAll ? "View Less" : "View More"}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-500 ${showAll ? "rotate-180" : ""}`}
              />
            </Button>
          </Reveal>


        </div>
      </div>
    </section>
  );
};

export default Projects;
