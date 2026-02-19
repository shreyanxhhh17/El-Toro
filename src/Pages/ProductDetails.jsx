import { useParams } from "react-router-dom";
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
    description: "Crafted from premium full-grain leather with a structured silhouette."
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: "₹12,499",
    img: metalwatch,
    description: "Precision engineered timepiece with brushed steel casing."
  },
  {
    id: 3,
    name: "Tailored Suit",
    price: "₹29,999",
    img: tailoredsuit,
    description: "Sharp tailored suit built with refined European cuts."
  },
  {
    id: 4,
    name: "Classic White Shirt",
    price: "₹6,999",
    img: whiteshirt,
    description: "Crisp Egyptian cotton shirt with structured collar."
  },
  {
    id: 5,
    name: "Premium Denim Jeans",
    price: "₹8,499",
    img: denimjeans,
    description: "Heavyweight indigo denim with modern slim fit."
  },
  {
    id: 6,
    name: "Elegant Silk Scarf",
    price: "₹4,999",
    img: silkscarf,
    description: "Pure silk scarf designed for refined layering."
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="pt-40 text-center">Product not found</div>;
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      
      <div className="bg-gray-100 p-6">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[35rem] object-cover"
        />
      </div>

      <div>
        <h1 className="font-serif text-4xl mb-6 tracking-wide">
          {product.name}
        </h1>

        <p className="text-2xl mb-6">{product.price}</p>

        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        <button className="border border-black px-10 py-4 uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;
