import { Card, CardContent } from "@/components/ui/card";
import graphicSamples from "@/assets/graphic-samples.png";
import brandBackground from "@/assets/brand-background.jpg";

const Portfolio = () => {

  return (
    <section 
      id="designs" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${brandBackground})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            The Designs
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto font-body">
            Designed with intention and shaped by each brand's identity, this collection reflects the range, versatility, and refinement behind Brand Image Marketing. From bold to minimal, modern to western, every piece is crafted to be unmistakably theirs.
          </p>
        </div>

        {/* Graphic Samples Showcase */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card/95 border-border/50 overflow-hidden hover-lift transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={graphicSamples} 
                alt="Collection of graphic design samples including logos, social media graphics, and marketing materials"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
