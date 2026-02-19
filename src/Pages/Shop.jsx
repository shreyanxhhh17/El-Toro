import { useState } from "react";
import { Link } from "react-router-dom";
import leatherjacket from "../assets/Leather-jacket.png";
import metalwatch from "../assets/metal-watch.png";
import tailoredsuit from "../assets/suit.png";
import whiteshirt from "../assets/white-shirt.png";
import denimjeans from "../assets/denim-jeans.png";
import silkscarf from "../assets/silk-scarf.png";

const products = [
  {
    id: 1,
    name: "Luxury Leather Jacket",
    price: "₹24,999",
    img: leatherjacket,
    category: "outerwear",
    description: "Crafted from premium full-grain leather with a structured silhouette."
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: "₹12,499",
    img: metalwatch,
    category: "accessories",
    description: "Precision engineered timepiece with brushed steel casing."
  },
  {
    id: 3,
    name: "Tailored Suit",
    price: "₹29,999",
    img: tailoredsuit,
    category: "outerwear",
    description: "Sharp tailored suit built with refined European cuts."
  },
  {
    id: 4,
    name: "Classic White Shirt",
    price: "₹6,999",
    img: whiteshirt,
    category: "essentials",
    description: "Crisp Egyptian cotton shirt with structured collar."
  },
  {
    id: 5,
    name: "Premium Denim Jeans",
    price: "₹8,499",
    img: denimjeans,
    category: "essentials",
    description: "Heavyweight indigo denim with modern slim fit."
  },
  {
    id: 6,
    name: "Elegant Silk Scarf",
    price: "₹4,999",
    img: silkscarf,
    category: "accessories",
    description: "Pure silk scarf designed for refined layering."
  }
];


const categories = ["all", "outerwear", "accessories", "essentials"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white text-black font-sans">

      {/* Header */}
      <section className="pt-32 pb-20 text-center bg-black text-white">
        <h1 className="font-serif text-5xl tracking-wide mb-6">
          Shop Collection
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Designed for men who value structure, precision and timeless identity.
        </p>
      </section>

      {/* Category Bar */}
      <div className="border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 text-xs uppercase tracking-[0.3em]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`transition ${
                selectedCategory === category
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-x-16 gap-y-20">

          {filteredProducts.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              No products found.
            </p>
          ) : (
            filteredProducts.map((product, index) => (
              <div key={index} className="group">

                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[30rem] object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <h3 className="text-lg tracking-wide font-medium">
                    {product.name}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {product.price}
                  </span>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="inline-block mt-3 text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-black transition"
                >
                  View Details
                </Link>
              </div>
            ))
          )}

        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 bg-black text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-10 tracking-wide">
            Built For Presence
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            El Toro is constructed for men who demand structure in design and 
            substance in quality. Every piece is built to endure trends and 
            define character.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Shop;
