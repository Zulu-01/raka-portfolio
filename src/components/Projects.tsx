import { Building, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "HidGems Indo",
      description: "A frontend website that made with HTML, CSS, JavaScript language with Framework ReactJS",
      image: project1Image,
      sourceLink: "https://github.com/JoyAbadi31/HidGemsIndonesia"
    },
    {
      title: "Cendrawasih School", 
      description: "A fullstack website that made with PHP language with Framework Laravel",
      image: project2Image,
      sourceLink: "https://github.com/AdliGR/Project_UAS_Cendrawasih"
    },
    {
      title: "E-learning App",
      description: "A cross-platform educational application for online learning and course management",
      image: project3Image,
      sourceLink: "https://github.com/richbruh/uas-crossplat"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="inline-flex items-center gap-2"
                    onClick={() => window.open(project.sourceLink, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="inline-flex items-center gap-2"
              onClick={() => window.location.href = '/projects'}
            >
              See More Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;