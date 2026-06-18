import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import shoes from "/Users/SHA 02/stryde/src/data/shoes.json";

// ─── Derived categories from the JSON ─────────────────────────────────────────
const CATEGORIES = ["All", ...new Set(shoes.map((s) => s.category))];

// ─── Stock helpers ─────────────────────────────────────────────────────────────
function stockMeta(stock) {
  if (stock === "in") return { color: "bg-[#89E900]", label: "In stock" };
  if (stock === "low") return { color: "bg-amber-400", label: "Last few" };
  return { color: "bg-[#444]", label: "Sold out" };
}

// ─── Individual shoe card ──────────────────────────────────────────────────────
function ShoeCard({ shoe, onAdd }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeError, setSizeError] = useState(false);
  const { color, label } = stockMeta(shoe.stock);
  const isSoldOut = shoe.stock === "out";

  function handleAdd() {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 1500);
      return;
    }
    onAdd(shoe, selectedSize);
    setSelectedSize("");
  }

  function handleSizePick(sz) {
    setSelectedSize((prev) => (prev === sz ? "" : sz));
    setSizeError(false);
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#89E900] hover:-translate-y-0.5 transition-all duration-200">
      {/* Image area */}
      <div className="bg-[#222] h-44 flex items-center justify-center relative">
        {shoe.image ? (
          <img
            src={shoe.image}
            alt={shoe.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-8 bg-[#333] rounded-md" />
            <div className="w-10 h-3 bg-[#2a2a2a] rounded-sm" />
          </div>
        )}

        {shoe.isNew && !isSoldOut && (
          <span className="absolute top-2.5 left-2.5 bg-[#89E900] text-[#111] text-[10px] font-bold tracking-wide px-2 py-0.5 rounded">
            NEW
          </span>
        )}
        {isSoldOut && (
          <span className="absolute top-2.5 left-2.5 bg-[#2a2a2a] text-[#666] text-[10px] font-bold tracking-wide px-2 py-0.5 rounded">
            SOLD OUT
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <p className="text-[15px] font-semibold text-[#f0f0f0] leading-tight">
          {shoe.name}
        </p>
        <p className="text-[11px] text-[#666] mt-0.5 mb-2.5">{shoe.sub}</p>

        <div className="flex items-center gap-1.5 mb-2.5">
          <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
          <span className="text-[11px] text-[#666]">{label}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {shoe.sizes.map((sz) => (
            <button
              key={sz}
              onClick={() => handleSizePick(sz)}
              disabled={isSoldOut}
              className={`text-[10px] px-2 py-1 rounded border transition-all duration-150 font-medium
                ${
                  selectedSize === sz
                    ? "border-[#89E900] text-[#89E900] bg-[#89E900]/10"
                    : "border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#ccc]"
                }
                disabled:opacity-30 disabled:cursor-not-allowed`}
            >
              {sz}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[15px] font-bold text-[#89E900]">
            KES {shoe.price.toLocaleString()}
          </span>
          <button
            onClick={handleAdd}
            disabled={isSoldOut}
            className="bg-[#89E900] text-[#111] w-8 h-8 rounded-lg text-xl font-bold flex items-center justify-center hover:bg-[#a5ff1a] active:scale-95 transition-all disabled:bg-[#2a2a2a] disabled:text-[#555] disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>

        <p
          className={`text-[10px] mt-1.5 h-3 transition-colors ${
            sizeError ? "text-amber-400" : "text-[#555]"
          }`}
        >
          {isSoldOut
            ? ""
            : sizeError
            ? "Pick a size first"
            : selectedSize
            ? `Size ${selectedSize} selected`
            : "Select a size"}
        </p>
      </div>
    </div>
  );
}

// ─── Main ShopPage ─────────────────────────────────────────────────────────────
// Props:
//   bagCount   — number from App.jsx (or CartContext)
//   onAddToBag — function(shoe, size) called on each add
//
// App.jsx usage:
//   const [bagCount, setBagCount] = useState(0);
//   <ShopPage bagCount={bagCount} onAddToBag={() => setBagCount(c => c + 1)} />

export default function Shopping({ bagCount = 0, onAddToBag }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [toast, setToast] = useState(null);

  const filtered =
    activeFilter === "All"
      ? shoes
      : shoes.filter((s) => s.category === activeFilter);

  function handleAdd(shoe, size) {
    onAddToBag?.(shoe, size);
    setToast(`${shoe.name} — Size ${size} added`);
    setTimeout(() => setToast(null), 2000);
  }

  return (
    <div
      className="min-h-screen bg-[#111] text-[#f0f0f0]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Bag bar */}
      <div className="sticky top-0 z-40 bg-[#111] border-b border-[#2a2a2a] px-6 md:px-10 py-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-[#555] uppercase tracking-widest">Shop</p>
          <p className="text-[13px] font-semibold text-[#f0f0f0]">
            {filtered.length} style{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <button className="flex items-center gap-2.5 border border-[#89E900] text-[#89E900] px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#89E900]/10 transition-colors">
          <FaBagShopping size={14} />
          Your Bag
          <span
            className={`bg-[#89E900] text-[#111] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
              bagCount > 0 ? "scale-110" : ""
            }`}
          >
            {bagCount}
          </span>
        </button>
      </div>

      {/* Toast */}
      <div
        className={`fixed top-20 right-6 z-50 bg-[#1a2200] border border-[#89E900] text-[#89E900] text-[12px] font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 ${
          toast
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {toast}
      </div>

      {/* Category filters */}
      <div className="px-6 md:px-10 pt-6 pb-4 flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-[12px] font-semibold px-4 py-1.5 rounded-full border transition-all duration-150
              ${
                activeFilter === cat
                  ? "bg-[#89E900] text-[#111] border-[#89E900]"
                  : "border-[#2a2a2a] text-[#666] hover:border-[#89E900] hover:text-[#89E900]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="px-6 md:px-10 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} onAdd={handleAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}
