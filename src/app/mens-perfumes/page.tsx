import Image from "next/image";

export default function MensPerfumesSection() {
  const mensPerfumes = [
    {
      id: "m1",
      name: "Ocean Mist",
      description: "A fresh and invigorating scent with marine notes.",
      imageUrl: "/images/ocean-mist.jpg",
    },
    {
      id: "m2",
      name: "Cedarwood Classic",
      description: "Warm and woody aroma with cedar and spice.",
      imageUrl: "/images/cedarwood-classic.jpg",
    },
    {
      id: "m3",
      name: "Spice Trail",
      description: "Bold and spicy fragrance with cinnamon and pepper.",
      imageUrl: "/images/spice-trail.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Men&#39;s Perfumes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mensPerfumes.map((perfume) => (
          <div key={perfume.id}>
            <Image
              src={perfume.imageUrl}
              alt={perfume.name}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{perfume.name}</h2>
            <p className="text-gray-600">{perfume.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
