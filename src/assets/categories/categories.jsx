import CardCategory from "../card/CardCategory";

export default function Categories() {
  const products = [
    {
      image:
        "https://i.postimg.cc/635PCGcD/pexels-introspectivedsgn-4211339.jpg",
      title: "URBAN MOTION",
      category:"STREETWEAR"
    },
    {
      image:
        "https://i.postimg.cc/HxZxdXj4/pexels-alokkd1-32644170.jpg",
      title: "OFFICE STANDARD",
      category:"FORMAL WEAR"
    },
    {
      image:
        "https://i.postimg.cc/TPSdsGSf/pexels-ihsanaditya-5610717.jpg",
      title: "HER COLLECTION",
      category:"WOMEN'S"
    },
    {
      image:
        "https://i.postimg.cc/dQRF28Jg/pexels-pedrofurtadoo-31451006.jpg",
      title: "EVERYDAY COMFORT",
      category:"COMFORT"
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('../bg/Contour Line(1).svg')",
      }}
      className="bg-cover min-h-screen flex justify-center items-start py-20 px-6 bg-[#f8f8f8]"
    >
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
              category={item.category}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
