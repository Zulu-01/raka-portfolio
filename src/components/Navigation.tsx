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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="nav-modern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Modern Logo */}
          <div className="font-playfair font-bold text-2xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            RAKA
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ id, label }) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/50 font-medium group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg glass hover:bg-white/10"
            >
              <div className="relative">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass rounded-lg mt-2 border border-border">
              {navItems.map(({ id, label }) => (
                <button 
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors w-full text-left rounded-md font-medium"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;