import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully.");
  };

  return (
    <div className="bg-white text-black font-sans">

      {/* Hero Section */}
      <section className="bg-black text-white py-32 text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
          Contact El Toro
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          We are here to assist you. Reach out with inquiries, collaborations, or support requests.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">

        {/* Contact Info */}
        <div>
          <h2 className="font-serif text-3xl mb-8 tracking-wide">
            Get In Touch
          </h2>

          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              <span className="font-medium text-black">Email:</span><br />
              support@eltoro.com
            </p>

            <p>
              <span className="font-medium text-black">Phone:</span><br />
              +91 98765 43210
            </p>

            <p>
              <span className="font-medium text-black">Head Office:</span><br />
              Mumbai, India
            </p>

            <p className="pt-6 border-t text-sm text-gray-500">
              Business Hours: Monday to Friday, 10 AM to 6 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <label className="block uppercase text-xs tracking-widest mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full border border-black py-4 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition duration-500"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>

      {/* Footer Section */}
      <section className="bg-gray-50 py-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EL TORO. All rights reserved.
      </section>

    </div>
  );
};

export default Contact;
