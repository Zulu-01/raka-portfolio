import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const profilePhoto = "/lovable-uploads/d1ee4d0f-a426-4212-860e-2fc4d34f59bb.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Hello, I'm
                <br />
                <span className="text-foreground">Raka Satya Wurya Andhika</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Web and Application Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="secondary" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-soft border-4 border-background">
                <img
                  src={profilePhoto}
                  alt="Raka Satya Wurya Andhika"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;