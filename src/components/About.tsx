const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Rooted in Agriculture,
              <br />
              <span className="text-primary">Driven by Design</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                We understand the livestock industry because we live it. Our
                design studio specializes in creating authentic, professional
                brands for ranchers, breeders, feed suppliers, and agriculture
                businesses.
              </p>
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                From logo design to complete website development, we craft
                visual identities that honor your heritage while positioning
                your business for growth. Every project reflects the values of
                hard work, integrity, and excellence that define the livestock
                community.
              </p>
              <div className="pt-4">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg">
                  <p className="text-primary font-display italic text-lg">
                    "Design that speaks to the land and the legacy."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-lg hover-lift">
                <div className="text-3xl font-display font-semibold text-primary mb-2">
                  Authentic
                </div>
                <p className="text-foreground/70 font-body">
                  Designs rooted in agricultural tradition
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg hover-lift">
                <div className="text-3xl font-display font-semibold text-primary mb-2">
                  Professional
                </div>
                <p className="text-foreground/70 font-body">
                  Quality that matches your standards
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg hover-lift">
                <div className="text-3xl font-display font-semibold text-primary mb-2">
                  Personal
                </div>
                <p className="text-foreground/70 font-body">
                  One-on-one attention to your vision
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg hover-lift">
                <div className="text-3xl font-display font-semibold text-primary mb-2">
                  Proven
                </div>
                <p className="text-foreground/70 font-body">
                  Results you can measure and trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
