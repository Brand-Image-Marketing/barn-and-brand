import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDesktop from "@/assets/hero-desktop.jpg";
import heroTablet from "@/assets/hero-tablet.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
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
      <picture className="absolute inset-0">
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <source media="(min-width: 768px)" srcSet={heroTablet} />
        <img 
          src={heroMobile}
          alt="Brand Image Marketing - Cowboy hat with brand"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="container mx-auto text-center max-w-4xl fade-in relative z-10">
        <div className="mb-6 inline-block">
          <h1 className="text-4xl md:text-7xl font-display font-semibold text-cream mb-6 leading-tight">
            Your Brand
            <br />
            Your Image
            <br />
            Your Marketing
          </h1>
        </div>
        <div className="mb-8 flex justify-center">
          <img 
            src={bimLogo} 
            alt="Brand Image Marketing" 
            className="h-44 md:h-52 w-auto"
          />
        </div>

        <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          I help businesses turn their mark into an unforgettable story; uniting <em>brand</em>, <em>image</em>, and <em>marketing</em> into one authentic, polished, powerful presence.
        </p>
      </div>
    </section>
  );
};

export default Hero;
