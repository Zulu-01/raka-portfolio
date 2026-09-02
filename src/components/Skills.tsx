import { Code } from "lucide-react";
import Reveal from "@/components/Reveal";
import SkillsMindMap from "@/components/SkillsMindMap";

const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"] },
  { title: "Backend", skills: ["PHP", "Laravel", ".NET"] },
  { title: "Database", skills: ["PhpMyAdmin", "MySQL", "SQL Server Management Studio"] },
  { title: "Mobile", skills: ["Android Studio (Kotlin)", "React Native"] },
  { title: "Cloud", skills: ["Firebase", "Supabase"] },
  { title: "Tools", skills: ["GitHub", "VS Code"] },
  { title: "Others", skills: ["Python", "TypeScript"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gradient-secondary relative overflow-hidden scroll-mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass-card rounded-full">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              My Technology
              <span className="gradient-text block">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An interactive map of every technology I work with — from interface to database.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={120}>
            <SkillsMindMap categories={skillCategories} />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <Reveal
                key={category.title}
                direction="up"
                delay={index * 90}
                className="glass-card fluid-card group relative rounded-2xl p-6"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
                <h3 className="relative font-heading text-lg font-bold text-foreground">{category.title}</h3>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
