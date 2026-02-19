import { Link } from "react-router-dom";
import metalwatch from "../assets/metal-watch.png"
import leatherjacket from "../assets/Leather-jacket.png"
import tailoredsuit from "../assets/suit.png"

const Homepage = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1520975693419-5b94e2a7b5d7"
          alt="Premium Menswear"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-wide mb-6">
            EL TORO
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
            Elevated essentials for the modern man.
          </p>
          <Link
            to="/shop"
            className="border border-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16 tracking-wide">
            Featured Collection
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            
            {[
              {
                name: "Luxury Leather Jacket",
                img: leatherjacket,
              },
              {
                name: "Minimalist Watch",
                img: metalwatch,
              },
              {
                name: "Tailored Suit",
                img: tailoredsuit,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-wide">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 bg-black text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">
          Craftsmanship Meets Confidence
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every piece is designed with precision, premium materials,
          and timeless aesthetics. El Toro is not fashion. It is identity.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-black text-center">
        <h2 className="text-3xl font-semibold mb-6 tracking-wide">
          Redefine Your Wardrobe
        </h2>
        <Link
          to="/shop"
          className="border border-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
};

export default Homepage;
