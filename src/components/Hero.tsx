import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const profilePhoto = "/lovable-uploads/d1ee4d0f-a426-4212-860e-2fc4d34f59bb.png";

const backgroundImages = [
  "/lovable-uploads/c4c477af-8ed5-4d69-81c3-1eef01ea4705.png",
  "/lovable-uploads/2aa01748-52de-4804-bd2f-344aa8fc89c6.png",
  "/lovable-uploads/b9499521-37ec-48ab-81c3-3c2364615681.png",
  "/lovable-uploads/9f88c9f4-8888-4776-b662-60964f30ce6d.png"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Cycling Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium backdrop-blur-sm animate-glow-pulse">
                  Available for Work
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Hello, I'm
                <br />
                <span className="gradient-text">Raka Satya</span>
                <br />
                <span className="text-muted-foreground text-4xl sm:text-5xl lg:text-6xl">Wurya Andhika</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-lg">
                Creative Web Developer crafting digital experiences with modern technologies
              </p>
            </div>


            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 rounded-xl hover:bg-muted/20 hover-lift glass-card"
                onClick={() => window.open('https://www.instagram.com/raka_s.w.a.t/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 rounded-xl hover:bg-muted/20 hover-lift glass-card"
                onClick={() => window.open('https://github.com/Zulu-11', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-12 h-12 rounded-xl hover:bg-muted/20 hover-lift glass-card"
                onClick={() => window.open('https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="w-full h-full rounded-2xl overflow-hidden glass-card hover-lift">
                  <img
                    src={profilePhoto}
                    alt="Raka Satya Wurya Andhika"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
};

export default Hero;