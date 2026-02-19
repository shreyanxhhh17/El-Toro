import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(form.email, form.password);

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
            Welcome Back
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Access your account to manage orders, track purchases,
            and continue your experience with structured luxury.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center bg-white px-8 py-20">
        <div className="w-full max-w-md">

          <h1 className="font-serif text-4xl mb-12 tracking-wide">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">

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

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest">
              <Link to="/forgot-password" className="hover:text-black transition">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full border border-black py-4 uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white transition duration-500"
            >
              Login
            </button>

          </form>

          <p className="mt-10 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="underline">
              Create one
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;
