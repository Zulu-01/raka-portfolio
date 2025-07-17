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
                A student who is eager to learn new things, willing to take on challenges, and responsible in completing assigned tasks. Currently, I am deepening my knowledge in the field of Computer Science through university studies and online courses. In my studies in Computer Science, I am particularly interested in UI/UX Design and Web Development. I have a talent for Web Development, with analytical skills, creativity in designing interfaces, and an understanding of modern web technologies. I have experience in designing responsive and functional web solutions, both individually and as part of a professional team.
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