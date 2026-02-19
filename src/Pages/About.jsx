import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black font-sans">

      {/* Hero Section */}
      <section className="bg-black text-white py-32 text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
          About El Toro
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Structure. Precision. Identity.
        </p>
      </section>

      {/* Brand Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-serif text-4xl mb-8 tracking-wide">
            Our Philosophy
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            El Toro was founded on a singular principle: modern masculinity 
            should be defined by intention, not trend. Our garments are 
            engineered with structure, crafted with precision, and designed 
            to endure beyond seasonal cycles.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl mb-8 tracking-wide">
            Craftsmanship
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Every piece undergoes meticulous construction using premium 
            materials sourced responsibly. From structured tailoring to 
            refined finishing, our focus remains unwavering on durability, 
            proportion, and timeless execution.
          </p>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="w-24 h-px bg-gray-300 mx-auto"></div>

      {/* Identity Section */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="font-serif text-4xl mb-10 tracking-wide">
          Designed For Presence
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          El Toro is not about excess. It is about clarity. 
          Clean silhouettes. Controlled palettes. Purposeful details. 
          We design for men who move with confidence and value substance 
          over noise.
        </p>
      </section>

      {/* Materials Section */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          
          <div>
            <h3 className="font-serif text-2xl mb-4">Premium Fabrics</h3>
            <p className="text-gray-600 leading-relaxed">
              Egyptian cotton, full-grain leather, heavyweight raw denim.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-4">Tailored Structure</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern cuts engineered for proportion and longevity.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-4">Sustainable Intent</h3>
            <p className="text-gray-600 leading-relaxed">
              Responsible sourcing and long-term wearability.
            </p>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-black text-white py-28 text-center px-6">
        <h2 className="font-serif text-4xl mb-8 tracking-wide">
          Elevate The Standard
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          We are building more than garments. 
          We are building a standard for modern menswear.
        </p>
      </section>

    </div>
  );
};

export default About;
