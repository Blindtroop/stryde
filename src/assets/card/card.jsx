import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ image, title, description, price }) {
  return (
    <div className="bg-white p-6 flex flex-col text-left gap-7 w-120 h-150">
      {/* Image */}
      <div className="w-full h-[350px] flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold text-[#222222]">{title}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/*Price*/}
      <h1 className="text-xl font semibold text-[#222222] ">{price}</h1>
      {/* Button */}
      <button className="bg-[#89E900] text-[#222] px-3 py-3 w-50 rounded-2xl flex items-center justify-center gap-2 font-medium hover:scale-105 active:scale-95 transition shadow-md hover:shadow-lg">
        Add to Cart
        <FaShoppingCart className="text-[#222] text-lg" />
      </button>
    </div>
  );
}
