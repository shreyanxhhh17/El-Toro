import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center">
        <h2 className="font-serif text-4xl mb-6">Your Cart Is Empty</h2>
        <Link
          to="/shop"
          className="border border-black px-10 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">

      <h1 className="font-serif text-5xl mb-16">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-16">

        {/* Cart Items */}
        <div className="md:col-span-2 space-y-12">

          {cart.map((item, index) => (
            <div key={index} className="flex gap-8 border-b pb-8">

              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-48 object-cover bg-gray-100"
              />

              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  Size: {item.selectedSize}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  Color: {item.selectedColor}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(index, item.quantity - 1)
                    }
                    className="px-3 py-1 border"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(index, item.quantity + 1)
                    }
                    className="px-3 py-1 border"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm uppercase tracking-widest text-gray-500 hover:text-black"
                >
                  Remove
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg">
                  ₹{item.price * item.quantity}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="border p-8 h-fit">

          <h2 className="font-serif text-2xl mb-8">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between mb-8">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-4 mb-8">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full border border-black py-4 uppercase tracking-widest hover:bg-black hover:text-white transition">
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;
