import leatherTexture from "@/assets/leather-tooling-new.jpg";
import aboutMobile from "@/assets/about-texture-mobile.jpg";
import ownerPhoto from "@/assets/owner-photo.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-top bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${aboutMobile})`,
        backgroundSize: "100% auto",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          #about {
            background-image: url(${leatherTexture}) !important;
            background-size: cover !important;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-cream/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-cream/95 rounded-3xl p-8 md:p-12 border-4 border-tan/30 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
                A Story Rooted in Legacy.
              </h2>
              <div className="w-20 h-1 bg-tan mx-auto mb-6"></div>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <div className="bg-cream p-4 md:p-6 rounded-t-[200px] shadow-2xl border-4 border-tan overflow-hidden">
                <img
                  src={ownerPhoto}
                  alt="Brand Image Marketing Owner"
                  className="w-full h-auto object-cover rounded-t-[180px]"
                />
              </div>
            </div>

            <div className="space-y-6 text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                I'm Mari Morris — the storyteller behind Brand Image Marketing.
              </h3>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                Mine began with a love for livestock, a passion for competition, and a belief that the marks we leave —
                in the ring, on people, on communities — should stand the test of time.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                I grew up in Bend, Oregon, where livestock judging became both my passion and my path. That journey
                carried me to Oklahoma, where I competed at the collegiate level before earning my degree and stepping
                into the world of animal agriculture. After two years in the industry, I joined Show-Rite Feeds and
                discovered something unexpected: I had a gift for marketing.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                <em>Real, grounded, people-first marketing.</em>
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                What began with managing social media turned into building audiences in the tens of thousands, shaping
                strategy, and telling stories that resonated.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                But even as my career grew, another world was calling me home. My heart was in Augusta, Montana; a town
                tucked against the Rocky Mountain Front, where the wind doesn't let up and the mountains teach you to
                stay humble. Out here, life asks you to slow down and step up in the same breath.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                Today, my husband, Tucker, and his family run around 700 head of Maine-Anjou and Angus cattle across
                land that's been in the Morris family for five generations. We aren't hobby ranchers; this is our
                livelihood. It's the kind of place that grounds you, shapes you, and reminds you that nothing in life is
                given, only earned.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                Together, we're raising cattle.
                <br />
                We're raising our family.
                <br />
                And we're carrying forward a way of life built on legacy.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                In 2022, I made the hard decision to leave the corporate world so I could build something that felt as
                honest and grounded as the life we live here: intentional, rooted, and made by hand.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                Brand Image Marketing didn't start with a business plan. It started at my kitchen table after the kids
                fell asleep and the ranch work was done; in the quiet hours where ideas grow if you're willing to meet
                them.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                No formal training.
                <br />
                No shortcuts.
                <br />
                Just self-taught skills, word of mouth, earned trust, and the belief that good work doesn't need to be
                shouted to be felt.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                Today, I help businesses build brands with the same values this ranch teaches every day:
              </p>
              <div className="space-y-2 pt-4">
                <p className="text-lg text-foreground/90 font-body leading-relaxed font-semibold">
                  Say less. Mean more.
                </p>
                <p className="text-lg text-foreground/90 font-body leading-relaxed font-semibold">
                  Work hard. Stay steady.
                </p>
                <p className="text-lg text-foreground/90 font-body leading-relaxed font-semibold">
                  Build something that lasts.
                </p>
              </div>
              <p className="text-lg text-foreground/90 font-body leading-relaxed pt-4">
                Because branding isn't just marketing. It's story. It's identity. It's the mark you leave - on people,
                on communities, on the world that's watching.
              </p>
              <p className="text-lg text-foreground/90 font-body leading-relaxed pt-4 font-semibold">
                And I'm here to help you make yours unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
