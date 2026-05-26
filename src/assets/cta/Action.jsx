import FlipCard from "../card/flip";

export default function Action() {
  return (
    <section className="w-full h-150 bg-[#222222] flex flex-col items-center justify-center">
      <h1 className="text-center text-7xl font-sans uppercase"
      >
        <span className="text-white">WHY CHOOSE </span>

        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #89E900",
          }}
        >
          STRYDE
        </span>
      </h1>
      <FlipCard />
    </section>
  );
}