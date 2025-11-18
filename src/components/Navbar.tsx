import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bimLogo from "@/assets/bim-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Services", href: "#services" },
    { label: "The Proof", href: "#portfolio" },
    { label: "The Story", href: "#about" },
    { label: "Make Your Mark", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors font-body ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left transition-colors py-2 font-body ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
