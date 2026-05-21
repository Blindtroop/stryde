import CardCategory from "../card/CardCategory";

export default function Categories() {
  const products = [
    {
      image: "https://i.postimg.cc/KYcvMkwh/Untitled-May-21-2026-at-13-15-13.png",
      title: "URBAN MOTION",
    },
    {
      image: "https://i.postimg.cc/gkzP2F6t/Untitled-May-21-2026-at-13-15-13-(1).png",
      title: "OFFICE STANDARD",
    },
    {
      image: "https://i.postimg.cc/L4JwNtZw/Untitled-May-21-2026-at-13-15-13-(3).png",
      title: "HER COLLECTION",
    },
    {
      image: "https://i.postimg.cc/Zqk55YzC/Untitled-May-21-2026-at-13-15-13-(4).png",
      title: "EVERYDAY COMFORT",
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-start py-20 px-6 bg-[#f8f8f8]">

      <div className="w-full max-w-6xl">

        <h1 className="text-3xl font-semibold text-center mb-12">
          EXPLORE THE KICKS
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          {products.map((item, i) => (
            <CardCategory
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}