import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Heritage Ranch Branding",
      category: "Brand Identity",
      description: "Complete brand identity for a multi-generation cattle operation",
    },
    {
      title: "Valley Livestock Website",
      category: "Web Design",
      description: "Modern website showcasing breeding stock and sale catalogs",
    },
    {
      title: "Premium Feed Co. Packaging",
      category: "Package Design",
      description: "Product line redesign for livestock nutrition brand",
    },
    {
      title: "Annual Bull Sale Catalog",
      category: "Print Design",
      description: "100-page catalog featuring performance data and pedigrees",
    },
    {
      title: "Ranch Equipment Branding",
      category: "Brand Identity",
      description: "Logo and marketing materials for livestock equipment supplier",
    },
    {
      title: "County Fair Marketing",
      category: "Marketing Design",
      description: "Promotional campaign materials for regional livestock show",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Work That Stands Out
            <br />
            <span className="text-primary">In the Pasture & Market</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            Real projects for real ranchers. Each design tells a unique story while maintaining
            professional polish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift bg-background border-border/50 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-card/90 backdrop-blur-sm rounded text-sm font-body text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-body">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 font-body italic">
            Project details available upon request to protect client privacy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
