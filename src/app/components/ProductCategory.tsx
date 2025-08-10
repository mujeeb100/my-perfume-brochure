type ProductItem = {
  id: string | number;
  name: string;
  price: number;
  // Add other specific fields as needed
};

type ProductCategoryProps = {
  title: string;
  items: ProductItem[];
};

export default function ProductCategory({ title, items }: ProductCategoryProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded">
            {/* Product card content */}
          </div>
        ))}
      </div>
    </section>
  )
}