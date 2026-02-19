import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
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
    price: 24999,
    img: leatherjacket,
    description: "Crafted from premium full-grain leather with a structured silhouette.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"]
  },
  {
    id: 4,
    name: "Classic White Shirt",
    price: 6999,
    img: whiteshirt,
    description: "Crisp Egyptian cotton shirt with structured collar.",
    sizes: ["S", "M", "L"],
    colors: ["White", "Ivory"]
  },
  {
    id: 5,
    name: "Premium Denim Jeans",
    price: 8499,
    img: denimjeans,
    description: "Heavyweight indigo denim with modern slim fit.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Indigo"]
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

      <div className="bg-gray-100 p-8">
        <img src={product.img} alt={product.name} className="w-full h-[35rem] object-cover" />
      </div>

      <div>
        <h1 className="font-serif text-4xl mb-6">{product.name}</h1>
        <p className="text-2xl mb-6">₹{product.price}</p>

        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="mb-6">
          <p className="uppercase text-xs tracking-widest mb-3">Size</p>
          <div className="flex gap-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <p className="uppercase text-xs tracking-widest mb-3">Color</p>
          <div className="flex gap-4">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border ${
                  selectedColor === color ? "bg-black text-white" : ""
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-4 py-2 border"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 border"
          >
            +
          </button>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <p className="uppercase text-xs tracking-widest mb-3">Rating</p>
          <div className="flex gap-2">
            {[1,2,3,4,5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-xl ${
                  rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            addToCart({
              ...product,
              selectedSize,
              selectedColor,
              quantity
            })
          }
          className="w-full border border-black py-4 uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;
