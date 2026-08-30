import { Building, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import hidgemsImage from "@/assets/hidgems-indo.jpg";
import cendrawasihImage from "@/assets/cendrawasih-school.jpg";
import elearningImage from "@/assets/elearning-app.jpg";
import baduyAsset from "@/assets/baduy-website.png.asset.json";

const ProjectsPage = () => {
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
      description: "A website providing the public with information on the life, culture, and traditional values of the Baduy people, alongside a platform for marketing traditional Baduy products. Built with PHP, Laravel and MySQL.",
      image: baduyAsset.url,
      sourceLink: "https://github.com/wilbertb32/baduy_new_temporarycompleted_v3_indo"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background">
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
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;