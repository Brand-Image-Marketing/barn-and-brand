import { Share2, Mail, Target, Palette, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import leatherTooling from "@/assets/leather-texture-new.jpg";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Build and engage your audience with strategic content that connects, converts, and creates lasting relationships.",
      features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Platform Optimization"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Craft compelling campaigns that land in inboxes and drive action, building loyalty one message at a time.",
      features: ["Campaign Design", "List Management", "Automation Setup", "Performance Tracking"],
    },
    {
      icon: Target,
      title: "Paid Ads",
      description:
        "Reach the right people at the right time with targeted advertising that maximizes ROI and grows your business.",
      features: ["Ad Strategy", "Campaign Management", "A/B Testing", "Budget Optimization"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Create visual stories that capture attention and communicate your brand's message with clarity and impact.",
      features: ["Brand Identity", "Marketing Materials", "Social Graphics", "Print Design"],
    },
    {
      icon: Briefcase,
      title: "Marketing Consulting",
      description:
        "Strategic guidance to help you navigate the marketing landscape and build a brand that stands the test of time.",
      features: ["Brand Strategy", "Market Analysis", "Growth Planning", "Strategic Direction"],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${leatherTooling})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Services Built for
            <br />
            <span className="text-primary">Growth</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-body">
            Your brand is more than a name.
            <br />
            It's a claim, a promise, a story.
            <br />
            I bring it to life through the following services:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
