import leatherTexture from "@/assets/leather-texture.jpeg";

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
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-cream mb-6">
              A Story Rooted in Legacy.
            </h2>
            <div className="w-20 h-1 bg-tan mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-cream/90 font-body leading-relaxed">
              Every brand has a story. Mine began with a love for livestock, a passion for competition, and a belief that the marks we leave — in the ring, on people, on communities — should stand the test of time.
            </p>
            <p className="text-lg text-cream/90 font-body leading-relaxed">
              I grew up in Bend, Oregon, where livestock judging became both my passion and my path. That journey took me from Oregon to Oklahoma, where I judged competitively at the collegiate level. After graduation, I spent two years working in the ag industry before joining Show-Rite Feeds, where I discovered something unexpected: my talent for marketing. What began with simply managing their social media quickly grew into building audiences in the tens of thousands — and with it, a passion for strategy, creativity, and connection.
            </p>
            <p className="text-lg text-cream/90 font-body leading-relaxed">
              With a growing family at home and a vision for something greater, I took the leap into entrepreneurship in 2022 and founded Brand Image Marketing. Leaving corporate life allowed me to pour my energy into the part of the work I loved most: helping businesses connect with people in ways that mattered. Thanks to trusted relationships and word of mouth, my first clients came quickly, and BIM has grown ever since.
            </p>
            <p className="text-lg text-cream/90 font-body leading-relaxed">
              When I'm not helping clients build their brands, I'm at home on the ranch in Augusta, Montana, with my husband, Tucker, and our two kids, Maya and Rio. My children are fifth generation on this land — together we're raising cattle, raising a family, and carrying forward a life built on legacy.
            </p>
            <p className="text-lg text-cream/90 font-body leading-relaxed">
              That same belief drives my work: branding is more than marketing. It is meaning. It is movement. It is a mark that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
