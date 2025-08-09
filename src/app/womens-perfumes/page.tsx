export default function WomensPerfumesSection() {
  const womensPerfumes = [
    {
      id: "w1",
      name: "Lavender Bliss",
      description: "Soft and floral scent with lavender and vanilla notes.",
      imageUrl: "/images/lavender-bliss.jpg",
    },
    // ...more
  ];

  return (
    <div>
      <h1>Women&#39;s Perfumes</h1>
      <div>
        {womensPerfumes.map((perfume) => (
          <div key={perfume.id}>
            <img src={perfume.imageUrl} alt={perfume.name} />
            <h2>{perfume.name}</h2>
            <p>{perfume.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
