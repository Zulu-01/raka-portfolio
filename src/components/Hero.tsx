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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hello, I'm
                <br />
                <span className="text-white">Raka Satya Wurya Andhika</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/80">
                Web and Application Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full"
                onClick={() => window.open('https://www.instagram.com/raka_s.w.a.t/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full"
                onClick={() => window.open('https://github.com/Zulu-11', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full"
                onClick={() => window.open('https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/', '_blank')}
              >
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
                  className="w-full h-full object-cover object-top"
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