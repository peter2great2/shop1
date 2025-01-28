import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Input, Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";

const ExtendedRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    state: "",
    city: "",
    country: "",
    phone: "",
    street: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/register", {
        ...formData,
        address: {
          city: formData.city,
          state: formData.state,
          country: formData.country,
          street: formData.street
        }
      });
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Typography variant="h3" className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </Typography>
          <Typography className="text-gray-600 text-lg">
            Join our community and get started
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name
              </Typography>
              <Input
                size="lg"
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>

            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </Typography>
              <Input
                size="lg"
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </Typography>
              <Input
                size="lg"
                type="password"
                id="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>

            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </Typography>
              <Input
                size="lg"
                type="tel"
                id="phone"
                required
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>
          </div>

          <div>
            <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
              Street Address
            </Typography>
            <Input
              size="lg"
              id="street"
              required
              placeholder="123 Main Street"
              value={formData.street}
              onChange={handleChange}
              className="!border-gray-300 focus:!border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                State
              </Typography>
              <Input
                size="lg"
                id="state"
                required
                placeholder="New York"
                value={formData.state}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>

            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                City
              </Typography>
              <Input
                size="lg"
                id="city"
                required
                placeholder="New York City"
                value={formData.city}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>

            <div>
              <Typography variant="small" className="block text-gray-700 text-sm font-semibold mb-2">
                Country
              </Typography>
              <Input
                size="lg"
                id="country"
                required
                placeholder="United States"
                value={formData.country}
                onChange={handleChange}
                className="!border-gray-300 focus:!border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms and Conditions</a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Create Account
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ExtendedRegister;