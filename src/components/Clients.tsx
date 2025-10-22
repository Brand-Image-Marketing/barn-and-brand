import clientLogo1 from "@/assets/client-logo-1.png";
import clientLogo2 from "@/assets/client-logo-2.png";
import clientLogo3 from "@/assets/client-logo-3.png";

const Clients = () => {
  const clients = [
    { logo: clientLogo1, alt: "Client 1" },
    { logo: clientLogo2, alt: "Client 2" },
    { logo: clientLogo3, alt: "Client 3" },
  ];

  return (
    <section id="clients" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            These clients trust us with their{" "}
            <span className="text-primary">BRAND</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
