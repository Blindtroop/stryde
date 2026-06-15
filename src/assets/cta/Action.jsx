import { motion } from "motion/react";

const stats = [
  { value: "3+", label: "Years exp." },
  { value: "12+", label: "Projects" },
  { value: "8+", label: "Happy clients" },
  { value: "5★", label: "Rating" },
];

export default function Action (){
    return(
 <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="relative bg-[#222222] z-10 p-4 border-t border-b border-black/50 w-full"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 sm:px-10 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col items-center py-5 border-[#89E900]",
                // on mobile (2-col): right border on cols 0 only; col 1 is last in row
                // on sm (4-col): right border on all except last
                i === 0 ? "border-r" : "",
                i === 1 ? "border-r-0 sm:border-r" : "",
                i === 2 ? "border-r" : "",
                i === 3 ? "border-r-0" : "",
              ]
                .join(" ")
                .trim()}
            >
              <span className="text-[22px] font-bold text-[#89E900] leading-none mb-1">
                {s.value}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#89E900]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    )
}