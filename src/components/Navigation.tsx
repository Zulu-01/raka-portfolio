import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 glass-nav z-50 animate-fade-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-heading font-bold text-2xl gradient-text animate-float">
            RAKA
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/20 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/20 group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/20 group"
            >
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/20 group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-4 rounded-lg hover:bg-muted/20 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-muted/20"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 glass-card border-t border-border/20 m-4 rounded-xl">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors w-full text-left rounded-lg hover:bg-muted/20"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors w-full text-left rounded-lg hover:bg-muted/20"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors w-full text-left rounded-lg hover:bg-muted/20"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors w-full text-left rounded-lg hover:bg-muted/20"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-3 text-muted-foreground hover:text-foreground transition-colors w-full text-left rounded-lg hover:bg-muted/20"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;