import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = register(form.name, form.email, form.password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Side Visual */}
      <div className="hidden md:flex bg-black text-white items-center justify-center px-16">
        <div>
          <h2 className="font-serif text-5xl mb-8 tracking-wide">
            Join El Toro
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Create your account to access exclusive collections, track orders,
            and experience structured luxury tailored for the modern man.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center bg-white px-8 py-20">
        <div className="w-full max-w-md">

          <h1 className="font-serif text-4xl mb-12 tracking-wide">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">

            <div>
              <label className="block uppercase text-xs tracking-widest mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            <div>
              <label className="block uppercase text-xs tracking-widest mb-3">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full border border-black py-4 uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition duration-500"
            >
              Create Account
            </button>

          </form>

          <p className="mt-10 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Register;
