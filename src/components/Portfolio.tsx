import { Card, CardContent } from "@/components/ui/card";
import graphicSamples from "@/assets/graphic-samples.png";
import impact1 from "@/assets/impact-1.png";
import impact2 from "@/assets/impact-2.png";
import impact3 from "@/assets/impact-3.png";
import impact4 from "@/assets/impact-4.png";
import leatherTooling from "@/assets/leather-tooling-new.jpg";
import leatherMobile from "@/assets/about-texture-mobile.jpg";

const Portfolio = () => {
  const impactExamples = [
    { image: impact1, platform: "Instagram", alt: "Stock show tan Instagram post with engagement metrics" },
    { image: impact2, platform: "Facebook", alt: "Livestock teaching Facebook post with engagement metrics" },
    { image: impact3, platform: "Facebook", alt: "Stock show code Facebook post with engagement metrics" },
    { image: impact4, platform: "TikTok", alt: "Horse grooming TikTok with engagement metrics" },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-24 relative overflow-hidden bg-top bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${leatherMobile})`,
        backgroundSize: '100% auto',
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          #portfolio {
            background-image: url(${leatherTooling}) !important;
            background-size: cover !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            The Work
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto font-body">
            <strong><em>Real results. Real impact.</em></strong>
            <br />
            Here's a glimpse of the work that connects brands with their people.
          </p>
        </div>

        {/* Graphic Samples Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-card/95 border-border/50 overflow-hidden hover-lift transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={graphicSamples} 
                alt="Collection of graphic design samples including logos, social media graphics, and marketing materials"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
              Graphic Design Portfolio
            </h3>
            <p className="text-foreground/80 font-body">
              Brand identities, social graphics, and marketing materials that make an impression.
            </p>
          </div>
        </div>

        {/* High Impact Content Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-semibold text-foreground mb-4">
              High-Impact Content
            </h3>
            <p className="text-foreground/80 font-body">
              Content that stops the scroll and drives real engagement across platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactExamples.map((example, index) => (
              <Card 
                key={index}
                className="bg-card/95 border-border/50 overflow-hidden hover-lift transition-all duration-300"
              >
                <CardContent className="p-0">
                  <img 
                    src={example.image} 
                    alt={example.alt}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
