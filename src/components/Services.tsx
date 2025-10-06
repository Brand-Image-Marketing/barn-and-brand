import { Palette, Globe, Package, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Custom logos, color palettes, and brand guidelines that capture your ranch's unique character and values.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"],
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Modern, mobile-friendly websites that showcase your operation and connect with customers effectively.",
      features: ["Custom Websites", "Mobile Responsive", "SEO Optimization", "Content Management"],
    },
    {
      icon: Package,
      title: "Marketing Design",
      description:
        "Eye-catching designs for sale catalogs, advertisements, social media, and promotional materials.",
      features: ["Sale Catalogs", "Social Media Graphics", "Print Ads", "Promotional Materials"],
    },
    {
      icon: FileText,
      title: "Print Design",
      description:
        "Professional designs for business documents, signage, banners, and all your print needs.",
      features: ["Brochures & Flyers", "Banners & Signage", "Stationery Design", "Product Labels"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Services Built for
            <br />
            <span className="text-primary">Your Industry</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            Comprehensive design solutions tailored specifically for livestock operations and
            agricultural businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift bg-card border-border/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 font-body text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground/80 font-body">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
