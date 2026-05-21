export default function CardCategory({ image, title, gradient = "from-black/80" }) {
  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Gradient overlay (BOTTOM → UP) */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`} />

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white flex flex-col gap-3">

        <h1 className="text-xl font-semibold leading-tight">
          {title}
        </h1>

      </div>
    </div>
  );
}