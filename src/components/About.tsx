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
                A dedicated and results-driven Computer Science student with proven expertise in modern web development technologies. I bring strong analytical skills, attention to detail, and a collaborative mindset that drives successful project outcomes. My passion for creating innovative digital solutions aligns perfectly with organizational goals.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in full-stack development and a track record of delivering high-quality applications, I am committed to continuous learning and professional growth. I thrive in team environments and am eager to contribute my technical skills and fresh perspective to drive company success.
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