import { Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"]
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel", ".NET"]
    },
    {
      title: "Database",
      skills: ["PHPMyAdmin", "MySQL", "SQL Server Management Studio"]
    },
    {
      title: "Mobile",
      skills: ["Android Studio (Kotlin)", "React Native"]
    },
    {
      title: "Cloud",
      skills: ["Firebase", "Supabase"]
    },
    {
      title: "Tools",
      skills: ["GitHub", "VS Code"]
    },
    {
      title: "Others",
      skills: ["Python", "TypeScript"]
    }
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Technical Skills
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {skillCategories.map((category, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
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

      <Footer />
    </div>
  );
};

export default SkillsPage;