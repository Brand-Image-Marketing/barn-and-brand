import { Share2, Mail, Target, Palette, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import leatherTooling from "@/assets/leather-texture-new.jpg";
import leatherMobile from "@/assets/leather-texture-mobile.jpg";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      tagline: "Where connection meets conversion.",
      description:
        "Build and engage your audience with strategy that connects, converts, and creates loyal customers.",
      features: ["Content Strategy & Planning", "Community Management", "Analytics & Reporting", "Platform Optimization"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      tagline: "Visuals that tell your story.",
      description:
        "Create visuals that strengthen your brand and make a lasting impression.",
      features: ["Logo & Brand Design", "Marketing Materials", "Social Graphics", "Print Design"],
    },
    {
      icon: Briefcase,
      title: "Marketing Consulting",
      tagline: "Clarity, confidence, and direction.",
      description:
        "Get a strategy that aligns your message, goals, and growth for long-term success.",
      features: ["Brand Strategy", "Market Analysis", "Growth Planning", "Strategic Direction"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      tagline: "Inbox impact, not clutter.",
      description:
        "Craft campaigns that land with purpose; building loyalty and driving clicks that count.",
      features: ["Campaign Design", "List Management", "Automation Setup", "Performance Tracking"],
    },
    {
      icon: Target,
      title: "Paid Ads",
      tagline: "Stories that sell… amplified.",
      description:
        "Reach the right people with the right message; ads that stop the scroll and spark results.",
      features: ["Ad Strategy", "Campaign Management", "A/B Testing", "Budget Optimization"],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden bg-top bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${leatherMobile})`,
        backgroundSize: '100% auto',
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          #services {
            background-image: url(${leatherTooling}) !important;
            background-size: cover !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
            The Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-body">
            Your brand is more than a name.
            <br />
            <strong><em>It's a claim, a promise, a story.</em></strong>
            <br />
            I bring it to life through the following services:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift bg-card border-border/50 transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] text-center"
            >
              <CardHeader className="items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-foreground/60 font-body text-sm italic mt-2">
                  {service.tagline}
                </p>
                <CardDescription className="text-foreground/70 font-body text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
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
