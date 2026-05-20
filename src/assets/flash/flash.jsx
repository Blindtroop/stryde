export default function Flash() {
  return (
    <section className="h-120 flex items-center justify-center px-6 bg-[#222222]">
        <div className="absolute inset-0 opacity-20 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
            <h1
        style={{ fontFamily: "atoma" }}
        className="text-6xl text-[#B6B3E3]"
      >
            Adidas Ozweego.
          </h1>
          <h1 className="text-3xl font-bold mb-4 text-[#B6B3E3]">
            New heat just landed. Don’t miss out.
          </h1>

          <p className="text-gray-400 mb-6">
            Step up your rotation with the latest drop built for comfort, style,
            and everyday confidence. From clean streetwear aesthetics to
            performance-inspired details, these pairs are designed to stand out
            wherever you go. Limited stock available — grab yours before they’re
            gone
          </p>

          <button className="bg-[#B6B3E3] px-6 py-3 rounded-2xl text-black font-medium">
            Shop Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center">

  {/* Background Shape */}
   <div
    className="
      absolute
      w-[390px]
      h-[320px]
      bg-[#B6B3E3]
      rounded-full
      blur-3xl
      opacity-90
      z-0
    "
  ></div>
  <div
  className="
    absolute
    w-0
    h-0
    border-l-[300px]
    border-r-[300px]
    border-b-[390px]
    border-l-transparent
    border-r-transparent
    border-b-[#B6B3E3]
    rotate-9
    opacity-80
    z-0
    drop-shadow-2xl
  "
></div>

  {/* Shoe Image */}
  <img
    src="https://i.postimg.cc/MK7nqnss/Untitled-(5).png"
    alt="shoe"
    className="w-200 h-220 object-cover relative z-10"
  />
        </div>
        </div>
    </section>
  );
}
