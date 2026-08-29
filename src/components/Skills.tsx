import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom'
import Reveal from "@/components/Reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Javascript", "ReactJS"]
    },
    {
      title: "Backend", 
      skills: ["PHP", "Laravel"]
    },
    {
      title: "Database",
      skills: ["MySQL", "PhpMyAdmin"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-secondary relative overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              My Technology
              <span className="gradient-text block">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting digital experiences with modern tools and technologies
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Reveal
                key={index}
                direction="up"
                delay={index * 140}
                className="glass-card p-8 rounded-2xl fluid-card relative group"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center gap-3 group/skill hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full group-hover/skill:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center" delay={120}>
  <Link to="/skills">
    <Button size="lg" variant="outline" className="border-2 border-muted-foreground/20 hover:border-primary hover:bg-primary/5 fluid-card animated-border">
      <span className="mr-2">Explore All Skills</span>
      <ArrowRight className="h-5 w-5" />
    </Button>
  </Link>
</Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
