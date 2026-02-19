import { Link } from "react-router-dom";
import metalwatch from "../assets/metal-watch.png";
import leatherjacket from "../assets/Leather-jacket.png";
import tailoredsuit from "../assets/suit.png";
import background from "../assets/background.jpg";

const Homepage = () => {
  return (
    <div className="bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src={background}
          alt="Premium Menswear"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
            Premium Menswear
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-wide mb-8">
            EL TORO
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Elevated essentials crafted with precision and purpose.
          </p>

          <Link
            to="/shop"
            className="border border-white px-10 py-4 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="w-24 h-px bg-gray-700 mx-auto my-20"></div>

      {/* Featured Collection */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 tracking-wide">
            Featured Collection
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { name: "Luxury Leather Jacket", img: leatherjacket },
              { name: "Minimalist Watch", img: metalwatch },
              { name: "Tailored Suit", img: tailoredsuit },
            ].map((product, index) => (
              <div key={index} className="group text-center">
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[28rem] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-8 font-medium tracking-wide text-lg">
                  {product.name}
                </h3>

                <Link
                  to="/shop"
                  className="inline-block mt-4 text-sm uppercase tracking-widest text-gray-600 hover:text-black transition"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-32 bg-black text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-10 tracking-wide">
            Craftsmanship Meets Confidence
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Every garment is engineered for longevity, shaped by tradition,
            and refined for the modern man. This is not trend driven fashion.
            This is enduring identity.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white text-black text-center">
        <h2 className="font-serif text-4xl mb-10 tracking-wide">
          Redefine Your Wardrobe
        </h2>

        <Link
          to="/shop"
          className="border border-black px-12 py-4 uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition duration-500"
        >
          Shop Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-10 text-center text-sm tracking-wider">
        © {new Date().getFullYear()} EL TORO. All rights reserved.
      </footer>

    </div>
  );
};

export default Homepage;
