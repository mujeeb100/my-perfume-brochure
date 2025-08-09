// src/app/components/PerfumeGrid.tsx
import PerfumeCard from "./PerfumeCard";

const perfumes = [
  {
    title: "Royal Oud",
    description: "A luxurious blend of oud and spices.",
    imageUrl: "https://images.unsplash.com/photo-1600185365483-26e9a1b8a194", // Use: https://images.unsplash.com/photo-1600185365483-26e9a1b8a194
  },
  {
    title: "Floral Muse",
    description: "Delicate notes of jasmine and rose.",
    imageUrl: "/images/perfume2.jpg", // Use: https://images.unsplash.com/photo-1585386959984-a415522e3f41
  },
  {
    title: "Citrus Splash",
    description: "Refreshing citrus with a touch of musk.",
    imageUrl: "/images/perfume3.jpg", // Use: https://images.unsplash.com/photo-1576618148400-07cdb13499c4
  },
  {
    title: "Amber Night",
    description: "Sensual amber with vanilla base notes.",
    imageUrl: "/images/perfume4.jpg", // Use: https://images.unsplash.com/photo-1600185366009-d6b89e57f6b8
  },
  {
    title: "Ocean Breeze",
    description: "A light and airy aquatic fragrance.",
    imageUrl: "/images/perfume5.jpg", // Use: https://images.unsplash.com/photo-1560185008-b03310692f4d
  },
  {
    title: "Spiced Leather",
    description: "Bold spices layered with smoky leather.",
    imageUrl: "/images/perfume6.jpg", // Use: https://images.unsplash.com/photo-1588854337111-12d0d4d0a08c
  },
];


export default function PerfumeGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {perfumes.map((perfume, index) => (
        <PerfumeCard key={index} {...perfume} />
      ))}
    </div>
  );
}
