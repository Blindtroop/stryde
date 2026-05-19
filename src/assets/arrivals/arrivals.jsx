import { useState } from "react";
import ProductCard from "../card/card";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";

export default function Arrivals() {
  const products = [
    {
      image: "https://i.postimg.cc/1znDS08W/Adobe-Express-file-(1).png",
      title: "adidas Samba OG 'White/Black",
      description: "An absolute icon of street culture, this classic silhouette pairs a crisp white leather upper with a signature grey suede T-toe and a timeless gum rubber outsole. Its low-profile design and contrasting black three-stripes deliver an effortless, retro-inspired look that outlasts any trend",
      price:"Ksh 34,000"
    },
    {
      image: "https://i.postimg.cc/WzNMBhQv/Untitled.png",
      title: "adidas NMD_R1 'Core Black/Solar Orange",
      description: "Blending heritage running style with a sleek tech aesthetic, this silhouette features a breathable knit upper paired with an energy-returning BOOST midsole for ultimate all-day comfort.",
    },
    {
      image: "https://i.postimg.cc/4427fLcb/Untitled-(1).png",
      title: "Air Jordan 1 Mid 'Quilted Maroon",
      description: "Steeped in hardwood heritage, this elevated mid-top silhouette combines deep maroon overlays with unique, quilted red textile underlays for a rich texture contrast. A crisp white Swoosh and matching Wings logo pop against the dark, autumnal tones, all resting on a classic two-tone cupsole for reliable court-inspired style.",
    },
    {
      image: "https://i.postimg.cc/KctGV0Nb/Untitled-(2).png",
      title: "Nike Dunk Low 'Arizona State",
      description: "Channeling retro college hoops energy, this iconic low-top pairs a rich maroon leather base with vibrant gold overlays for a striking, high-contrast look. Complete with a crisp white midsole and a matching gold rubber outsole, it serves up a timeless blend of varsity heritage and street-level style.",
    },
    {
      image: "https://i.postimg.cc/4x6pxvZb/Untitled-(3).png",
      title: "Nike Court Vision Low 'White/Pink-Light Blue'",
      description: "Bringing a fresh, pastel energy to a classic hoops silhouette, this low-top features a crisp white upper accented by soft pink overlays and a light blue heel counter. Anchored by a bold black Swoosh and matching laces, it sits on a clean rubber cupsole to deliver effortless, everyday court style.",
    },
    {
      image: "https://i.postimg.cc/VkJL7mZR/Untitled-(4).png",
      title: "Crocs Classic Clog 'Black'",
      description: "The ultimate icon of irreverent comfort, this lightweight clog features a water-friendly, molded design with signature ventilation ports for maximum breathability. Equipped with a pivoting heel strap for a secure fit, it delivers casual, durable versatility that makes it a true everyday essential.",
    },
  ];

  const [index, setIndex] = useState(0);

  const visibleCards = 2;

  const next = () => {
    if (index < products.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-16">

      <h1 className="text-2xl font-semibold mb-10">
        OUR BEST SELLERS
      </h1>

      <div className="relative w-full max-w-6xl overflow-hidden">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {products.map((item, i) => (
            <div key={i} className="w-1/2 flex-shrink-0 px-4">
              <ProductCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full"
        >
          <FaArrowRight />
        </button>

      </div>
    </section>
  );
}