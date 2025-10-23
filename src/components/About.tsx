import leatherTexture from "@/assets/leather-tooling.jpg";
import ownerPhoto from "@/assets/owner-photo.jpg";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${leatherTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-cream/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-cream mb-6">
              A Story Rooted in Legacy.
            </h2>
            <div className="w-20 h-1 bg-tan mx-auto mb-6"></div>
          </div>

          <div className="bg-cream/95 rounded-3xl p-8 md:p-12 border-4 border-tan/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  I'm Mari Morris — the storyteller behind Brand Image Marketing.
                </h3>
                <p className="text-lg text-foreground/90 font-body leading-relaxed">
                  <em>Every brand has a story.</em> Mine began with a love for livestock, a passion for competition, and <em>a belief that the marks we leave — in the ring, on people, on communities — should stand the test of time.</em>
                </p>
                <p className="text-lg text-foreground/90 font-body leading-relaxed">
                  I grew up in Bend, Oregon, where livestock judging became both my passion and my path. That journey took me from Oregon to Oklahoma, where I judged competitively at the collegiate level. After graduation, I spent two years working in the ag industry before joining Show-Rite Feeds, where I discovered something unexpected: <em>my talent for marketing.</em> What began with simply managing their social media quickly grew into building audiences in the tens of thousands — and with it, a passion for strategy, creativity, and connection.
                </p>
                <p className="text-lg text-foreground/90 font-body leading-relaxed">
                  With a growing family at home and a vision for something greater, I took the leap into entrepreneurship in 2022 and founded <strong>Brand Image Marketing</strong>. Leaving corporate life allowed me to pour my energy into the part of the work I loved most: helping businesses connect with people in ways that mattered. Thanks to trusted relationships and word of mouth, my first clients came quickly, and BIM has grown ever since.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="bg-cream p-6 rounded-t-[200px] shadow-2xl">
                  <img 
                    src={ownerPhoto} 
                    alt="Brand Image Marketing Owner" 
                    className="w-full h-auto object-cover rounded-t-[180px]"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-foreground/90 font-body leading-relaxed">
                    When I'm not helping clients build their brands, I'm at home on the ranch in Augusta, Montana, with my husband, Tucker, and our two kids, Maya and Rio. My children are fifth generation on this land — together we're raising cattle, raising a family, <em>and carrying forward a life built on legacy.</em>
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg text-foreground/90 font-body leading-relaxed font-semibold">
                      That same belief drives my work: branding is more than marketing.
                    </p>
                    <p className="text-lg text-foreground/90 font-body leading-relaxed">
                      It is <em>meaning.</em>
                    </p>
                    <p className="text-lg text-foreground/90 font-body leading-relaxed">
                      It is <em>movement.</em>
                    </p>
                    <p className="text-lg text-foreground/90 font-body leading-relaxed">
                      It is <em>a mark that lasts.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
