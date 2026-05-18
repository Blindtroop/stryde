export default function Hero() {
  return (
    <section className="px-6 py-16 justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="text-left">
            <h1 className="text-2xl font-medium mb-2">
       <span className="text-[#89E900] font-sans text-5xl">Wear it,</span>
       <br />
       <span className="text-black font-sans text-5xl">your way.</span>
      </h1>
      <div className="flex justify-items-center mx-auto">
      <button className="bg-[#89E900] text-[#222222] px-6 py-2.5 rounded-2xl font-medium text-sm ">Start your journey here</button>
    </div>
      </div>
        {/* Image card — pill shape on top, rounded square on bottom */}
        <div className="relative z-10 flex items-end justify-center py-6">
          <img src="https://i.postimg.cc/3xG4CNCF/erasebg-transformed.png" alt="product" className="w-150 h-150 object-cover" />
        </div>
      </div>
      <p className="text-gray-500 text-base leading-relaxed max-w-xs mx-auto mb-8">
        Accessories that complete the look. Mix, match, and make it yours.
      </p>
      <div className="flex gap-3 justify-center mb-10">
        <button className="bg-[#89E900] text-[#1a3000] px-6 py-2.5 rounded-xl font-medium text-sm">
          Browse now
        </button>
        <button className="border border-gray-200 px-6 py-2.5 rounded-xl text-sm">
          See the lookbook
        </button>
      </div>

      {/* Trust bar */}
      <div className="flex justify-center border-t border-gray-100 pt-8 gap-0">
        {[
          { label: "Free shipping", sub: "Orders over $50" },
          { label: "Easy returns", sub: "30-day policy" },
          { label: "2-year warranty", sub: "On all products" },
        ].map((f, i, arr) => (
          <div key={f.label}
            className={`flex-1 max-w-[140px] px-4 ${i < arr.length - 1 ? "border-r border-gray-100" : ""}`}
          >
            <p className="text-sm font-medium mb-0.5">{f.label}</p>
            <p className="text-xs text-gray-400">{f.sub}</p>
          </div>
        ))}
      </div>

    </section>
  )
}