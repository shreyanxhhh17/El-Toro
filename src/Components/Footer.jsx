import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-24 pb-12 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl text-white mb-6 tracking-wide">
            EL TORO
          </h2>
          <p className="text-sm leading-relaxed">
            Elevated essentials engineered with precision and purpose.
            Designed for men who value structure, identity and presence.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="uppercase text-xs tracking-[0.3em] text-white mb-6">
            Shop
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/shop" className="hover:text-white transition">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Outerwear
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Essentials
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase text-xs tracking-[0.3em] text-white mb-6">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase text-xs tracking-[0.3em] text-white mb-6">
            Subscribe
          </h3>
          <p className="text-sm mb-6">
            Receive updates on new collections and releases.
          </p>

          <div className="flex border-b border-gray-600 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500"
            />
            <button className="uppercase text-xs tracking-widest text-white hover:opacity-70 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-20 pt-8 text-center text-xs tracking-wider">
        © {new Date().getFullYear()} EL TORO. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
