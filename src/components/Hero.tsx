import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-livestock.jpg";

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
        <div className="mb-6 inline-block">
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-cream mb-6 leading-tight">
            A Brand is a Mark That Lasts.
          </h1>
        </div>

        <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          The permanent brand a calf wears represents heritage, history, and future. 
          Your brand carries legacy too — its own mark of meaning.
          Make sure it's worth remembering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("#portfolio")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-2 border-cream text-cream hover:bg-cream hover:text-charcoal text-base px-8"
          >
            Let's Talk
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "50+", label: "Happy Clients" },
            { number: "100+", label: "Projects Completed" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-tan mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-cream/70 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
