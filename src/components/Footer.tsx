import { Mail, Phone } from "lucide-react";

const Footer = () => {

  return (
    <footer id="contact" className="bg-charcoal text-card">
      <div className="container mx-auto px-4 py-16">
        {/* Contact Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Let's Make Your Mark
            </h2>
            <p className="text-card/70 text-lg font-body max-w-2xl mx-auto">
              Every partnership starts with a conversation. Whether you're ready to build your brand from the ground up, refine your image, or bring fresh strategy to your marketing, I'd love to hear your story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Start the Conversation</h3>
              <iframe 
                className="airtable-embed w-full" 
                src="https://airtable.com/embed/appBQcGrZeZ0fJ2P3/pagKG3cXUbVZ9IR5I/form" 
                frameBorder="0" 
                width="100%" 
                height="1030" 
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium mb-1">Email</div>
                    <a
                      href="mailto:mari@brandimagemarketing.com"
                      className="text-card/70 hover:text-card transition-colors font-body"
                    >
                      mari@brandimagemarketing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium mb-1">Phone</div>
                    <a
                      href="tel:+14065907012"
                      className="text-card/70 hover:text-card transition-colors font-body"
                    >
                      406-590-7012
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-card/60 font-body text-sm">
                    <strong className="text-card/80">Your brand. Your image. Your marketing.</strong>
                    <br />
                    <span className="italic">Three words. One mission. A mark that lasts.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-card/20 text-center">
            <p className="text-card/60 font-body text-sm">
              © {new Date().getFullYear()} Brand Image Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
