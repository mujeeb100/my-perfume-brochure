export default function ContactSection() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! We will get back to you soon.");
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-gray-700">
        <p>
          <strong>Address:</strong> 123 Perfume Lane, Mumbai, India
        </p>
        <p>
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Email:</strong> support@perfumestore.com
        </p>
      </div>
    </div>
  );
}
