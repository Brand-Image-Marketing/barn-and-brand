import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-background px-4 pt-20"
    >
      <div className="container mx-auto text-center max-w-4xl fade-in">
        <div className="mb-6 inline-block">
          <div className="text-sage text-sm font-body uppercase tracking-widest mb-4">
            Design for the Livestock Industry
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground mb-6 leading-tight">
            Building Brands with
            <br />
            <span className="text-primary">Heritage & Heart</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
          Professional graphic and web design services tailored for the
          livestock industry. We create authentic brands that honor agricultural
          traditions while meeting modern business needs.
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
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8"
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
              <div className="text-3xl md:text-4xl font-display font-semibold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60 font-body">
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
