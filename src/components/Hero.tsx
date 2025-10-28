import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-branding.jpg";
import bimLogo from "@/assets/bim-logo.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="container mx-auto text-center max-w-4xl fade-in relative z-10">
        <div className="mb-8 flex justify-center">
          <img 
            src={bimLogo} 
            alt="Brand Image Marketing" 
            className="h-32 md:h-40 w-auto"
          />
        </div>
        <div className="mb-6 inline-block">
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-cream mb-6 leading-tight">
            Your Brand. Your Image. Your Marketing.
          </h1>
        </div>

        <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          At Brand Image Marketing, I help businesses turn their mark into a story people can't forget. Those stories are built on three pillars — your brand, your image, and your marketing. Alone they have power, but together they overlap, support, and strengthen each other into a presence that feels authentic, polished, and unforgettable.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("#portfolio")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
