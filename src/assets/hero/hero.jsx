import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="px-6 py-8 justify-center h-170 bg-[#222222]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex flex-col items-start text-left max-w-xl">
          <h1 className="text-2xl font-medium mb-2">
            <span className="text-[#89E900] font-sans text-5xl">
              Wear it,
            </span>
            <br />
            <span className="text-white font-sans text-5xl">
              your way.
            </span>
          </h1>

          <p className="font-medium mb-6 text-white/80 leading-relaxed">
            Discover footwear designed for every part of your day — from
            fast-paced mornings to laid-back evenings. Clean silhouettes,
            premium comfort, and timeless style come together to help you move
            confidently in every step.
          </p>

          <button className="bg-[#89E900] text-[#222222] px-6 py-2.5 rounded-2xl font-medium text-sm hover:scale-105 transition">
            Start your journey here
          </button>
        </div>

        <div className="relative flex items-center justify-center py-6">
          <div
            className="
              absolute
              w-[380px]
              h-[420px]
              bg-[#89E900]
              opacity-80
              -skew-y-12
              rotate-12
              shadow-2xl
            "
          />
          <div className="relative z-10 flex items-end justify-center py-6">
            <motion.img
              src="https://i.postimg.cc/3xG4CNCF/erasebg-transformed.png"
              alt="product"
              className="w-170 h-170 md:w-170 md:h-170 object-cover relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}