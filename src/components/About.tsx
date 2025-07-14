import { User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                About Me
              </h2>
            </div>
          </div>

          <Card className="p-8 sm:p-12 shadow-card">
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello, I'm a Computer Science student with a passion for web development. I have an interest with frontend technologies like ReactJS. Currently, I am studying Cloud technologies like Firebase and Supabase and also learning about backend like PHP and Laravel. I am also interested to learn about React Native and Android Studio for mobile app development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am working on several projects to enhance my skills and knowledge in these areas. I am always eager to learn new technologies and improve my skills. I have an experienced in designing responsive and functional web solutions, both individually and in teams.
              </p>

              <div className="pt-4">
                <Button className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  View CV
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;