// src/app/components/PerfumeCard.tsx
type PerfumeProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function PerfumeCard({ title, description, imageUrl }: PerfumeProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
