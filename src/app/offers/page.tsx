export default function OffersSection() {
  const offers = [
    {
      id: "o1",
      title: "Summer Sale - 20% OFF",
      details: "Get 20% off on all perfumes this summer. Limited time offer!",
    },
    {
      id: "o2",
      title: "Buy 2 Get 1 Free",
      details: "Buy any two perfumes and get the third one absolutely free.",
    },
    {
      id: "o3",
      title: "Free Shipping",
      details: "Free shipping on orders above ₹2000.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Current Offers</h1>
      <ul className="list-disc list-inside space-y-4">
        {offers.map((offer) => (
          <li key={offer.id} className="bg-pink-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{offer.title}</h2>
            <p className="text-gray-700">{offer.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
