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
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden hero-modern">
      {/* Cycling Background Images with enhanced effects */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float float-element"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float float-element"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-4">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block">Hello, I'm</span>
                <span className="gradient-text block mt-2">
                  Raka Satya Wurya Andhika
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 font-medium">
                Web and Application Developer
              </p>
              
              <p className="text-lg text-white/70 max-w-lg leading-relaxed">
                Crafting modern digital experiences with cutting-edge technologies and creative solutions.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, url: 'https://www.instagram.com/raka_s.w.a.t/', label: 'Instagram' },
                { icon: Github, url: 'https://github.com/Zulu-11', label: 'GitHub' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/', label: 'LinkedIn' }
              ].map(({ icon: Icon, url, label }) => (
                <Button 
                  key={label}
                  className="btn-modern w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white transition-all duration-300 hover:scale-110 glow-primary" 
                  onClick={() => window.open(url, '_blank')}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-modern bg-primary hover:bg-primary-glow text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-elevated hover:shadow-glow transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="btn-modern border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-glow-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-full blur-xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elevated border-4 border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Raka Satya Wurya Andhika"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float glow-primary"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full animate-float float-element glow-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;