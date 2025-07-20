import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/20 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center space-y-12">
            {/* Logo and tagline */}
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-bold gradient-text animate-float">
                RAKA SATYA
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Crafting digital experiences with passion, creativity, and cutting-edge technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-14 h-14 rounded-2xl glass-card hover-lift group"
                onClick={() => window.open('https://www.instagram.com/raka_s.w.a.t/', '_blank')}
              >
                <Instagram className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-14 h-14 rounded-2xl glass-card hover-lift group"
                onClick={() => window.open('https://github.com/Zulu-11', '_blank')}
              >
                <Github className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-14 h-14 rounded-2xl glass-card hover-lift group"
                onClick={() => window.open('https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/', '_blank')}
              >
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
              </Button>
            </div>

            {/* Back to top */}
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToTop}
              className="border-2 border-muted-foreground/20 hover:border-primary hover:bg-primary/5 hover-lift animated-border"
            >
              Back to Top ↑
            </Button>

            {/* Copyright */}
            <div className="pt-8 border-t border-border/20">
              <p className="text-muted-foreground text-lg">
                © 2025 Raka Satya Wurya Andhika. All rights reserved.
              </p>
              <p className="text-muted-foreground/60 text-sm mt-2">
                Built with passion using React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;