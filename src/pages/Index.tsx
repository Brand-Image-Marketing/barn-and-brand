import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <Clients />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
