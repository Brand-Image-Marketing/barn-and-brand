import { TrendingUp, Users, MousePointerClick, Heart, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";
import impact1 from "@/assets/impact-1.png";
import impact2 from "@/assets/impact-2.png";
import impact4 from "@/assets/impact-4.png";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const fbStats = [
    { label: "Reach", from: "162,935", to: "2,508,534", growth: "1440%", icon: TrendingUp },
    { label: "Followers", from: "17,356", to: "30,846", growth: "78%", icon: Users },
    { label: "Link Clicks", from: "3,249", to: "9,509", growth: "193%", icon: MousePointerClick },
    { label: "Interactions", from: "11,569", to: "195,026", growth: "1586%", icon: Heart },
  ];

  const igStats = [
    { label: "Reach", from: "105,119", to: "2,195,487", growth: "2000%", icon: TrendingUp },
    { label: "Followers", from: "15,098", to: "20,543", growth: "36%", icon: Users },
    { label: "Interactions", from: "110,146", to: "220,795", growth: "117%", icon: Heart },
    { label: "Views", from: "6,120", to: "58,211", growth: "875%", icon: Eye },
  ];

  const impactExamples = [
    { image: impact1, platform: "Instagram", alt: "Stock show tan Instagram post with engagement metrics" },
    { image: impact2, platform: "Facebook", alt: "Livestock teaching Facebook post with engagement metrics" },
    { image: impact4, platform: "TikTok", alt: "Horse grooming TikTok with engagement metrics" },
  ];

  const StatCard = ({ stat }: { stat: typeof fbStats[0] }) => {
    const Icon = stat.icon;
    const toNumber = parseInt(stat.to.replace(/,/g, ''));
    const animatedCount = useCountUp(toNumber, 2000, isVisible);
    
    // Fallback to actual number if animation hasn't started properly
    const displayCount = animatedCount === 0 && isVisible ? toNumber : animatedCount;
    
    const formatNumber = (num: number) => {
      return num.toLocaleString();
    };

    return (
      <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover-lift">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon className="w-5 h-5 text-primary" />
            <h4 className="text-sm font-display font-semibold text-foreground uppercase tracking-wide">
              {stat.label}
            </h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-display font-bold text-accent">
                +{stat.growth}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
              <span className="line-through">{stat.from}</span>
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="font-semibold text-foreground">{formatNumber(displayCount)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section ref={sectionRef} id="results" className="py-24 bg-gradient-to-br from-brown via-brown to-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream">
              The Proof
            </h2>
            <div className="w-20 h-1 bg-tan mx-auto"></div>
            <h3 className="text-3xl font-display font-semibold text-cream mb-4">
              Performance Metrics
            </h3>
            <p className="text-lg text-cream/90 font-body max-w-2xl mx-auto">
              These numbers tell a bigger story: In a highly niche market, <strong>with no paid ads</strong>, this account grew organically on social media through two years of consistent strategy, meaningful connection, and storytelling that resonates.
            </p>
            <p className="text-lg text-cream/90 font-body max-w-2xl mx-auto mt-4 italic">
              When story leads the way, numbers like these follow.
            </p>
          </div>

          {/* Facebook Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1877F2] to-[#0C63D4] rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold text-cream">Facebook</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fbStats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold text-cream">Instagram</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {igStats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>

          {/* High Impact Content Grid */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display font-semibold text-cream mb-4">
                High-Impact Content
              </h3>
              <p className="text-cream/90 font-body max-w-3xl mx-auto">
                A curated collection of the posts that traveled farthest. Content shaped by story, rooted in connection, and amplified organically by the people it resonated with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:w-1/2 [&>*:last-child:nth-child(odd)]:md:mx-auto">
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
      </div>
    </section>
  );
};

export default Results;