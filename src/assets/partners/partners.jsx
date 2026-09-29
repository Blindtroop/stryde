import { useState } from "react";

const partners = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Puma-logo-%28text%29.svg",
  },
  {
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/archive/e/ea/20160801155104%21New_Balance_logo.svg",
  },
];

function PartnerCard({ name, logo }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      className="flex items-center justify-center h-28 w-full sm:h-36 md:h-44 md:w-94 rounded-2xl border cursor-pointer transition-all duration-300 text-black"
      style={{
        color: 'black',
        borderColor: hovered ? "#89E900" : "#333",
        boxShadow: hovered ? "0 0 24px rgba(137, 233, 0, 0.12)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <img
        src={logo}
        alt={name}
        className="w-20 h-8 sm:w-28 sm:h-12 md:w-36 md:h-14 object-contain transition-all duration-300"
        style={{
          filter: hovered
            ? "brightness(0) invert(0)"
            : "brightness(0)",
        }}
      />
    </div>
  );
}

export default function TrustedPartners() {
  return (
    <section
      className="flex flex-col items-center py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-10"
    >
      <span
        className="text-xs font-semibold uppercase tracking-widest mb-2 text-center"
        style={{ color: "#818589", letterSpacing: "0.2em" }}
      >
        Brands We Carry
      </span>

      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center text-[#222222] mb-3 px-2"
        style={{ letterSpacing: "2px" }}
      >
        Our Trusted{" "}
        <span style={{ color: "#222222" }}>Partners</span>
      </h2>

      <div
        className="w-10 h-0.5 rounded-full mb-10 md:mb-14"
        style={{ background: "#89E900" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-3xl">
  {partners.map((p) => (
    <PartnerCard key={p.name} name={p.name} logo={p.logo} />
  ))}
</div>
    </section>
  );
}