import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contact" className="bg-charcoal text-card">
      <div className="container mx-auto px-4 py-16">
        {/* Contact Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Let's Build Your Brand
            </h2>
            <p className="text-card/70 text-lg font-body max-w-2xl mx-auto">
              Ready to elevate your livestock business with professional design? Get in touch
              today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
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
                      href="mailto:hello@ranchdesign.com"
                      className="text-card/70 hover:text-card transition-colors font-body"
                    >
                      hello@ranchdesign.com
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
                      href="tel:+15551234567"
                      className="text-card/70 hover:text-card transition-colors font-body"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-medium mb-1">Location</div>
                    <p className="text-card/70 font-body">Serving the Livestock Industry Nationwide</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-card/60 font-body text-sm italic">
                    "We're here to help you create a brand as strong as your stock."
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
