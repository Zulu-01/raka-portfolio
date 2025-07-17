import { Instagram, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full bg-background/10 hover:bg-background/20 text-background border-background/20"
              onClick={() => window.open('https://www.instagram.com/raka_s.w.a.t/', '_blank')}
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full bg-background/10 hover:bg-background/20 text-background border-background/20"
              onClick={() => window.open('https://github.com/Zulu-11', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full bg-background/10 hover:bg-background/20 text-background border-background/20"
              onClick={() => window.open('https://www.linkedin.com/in/raka-satya-wurya-andhika-63873932a/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <p className="text-background/80 text-center">
            © 2025 Raka Satya Wurya Andhika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;