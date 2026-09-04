import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { techStack } from "@/data/tech";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navigation />
      <Hero />

      {/* Continuously scrolling tech band bridging hero and about */}
      <section aria-label="Technologies I work with" className="relative border-y border-border/40 bg-gradient-secondary">
        <Reveal direction="fade" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Marquee items={techStack} speed={44} />
          <Marquee items={[...techStack].reverse()} speed={34} reverse />

        </Reveal>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
