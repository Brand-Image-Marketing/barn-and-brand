import { Mail, Phone } from "lucide-react";
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
                  <p className="text-card/60 font-body text-sm italic">
                    <strong className="text-card/80">Your brand. Your image. Your marketing.</strong>
                    <br />
                    Three words. One mission. A mark that lasts.
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
