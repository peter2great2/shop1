import { useState } from "react";
import axios from "axios";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      toast.success("Login successful");
      // navigate("/");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Typography
            variant="h3"
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            Welcome Back
          </Typography>
          <Typography className="text-gray-600 text-lg">
            Sign in to continue to your account
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <Input
              size="lg"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="!border-gray-300 focus:!border-indigo-500 focus:!ring-1 focus:!ring-indigo-500"
              labelProps={{ className: "hidden" }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                size="lg"
                type={passwordShown ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="!border-gray-300 focus:!border-indigo-500 focus:!ring-1 focus:!ring-indigo-500 pr-10"
                labelProps={{ className: "hidden" }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-indigo-500"
              >
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Sign In
          </Button>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outlined"
            className="w-full flex items-center justify-center gap-2 py-3 border-gray-300 hover:border-indigo-500 hover:bg-gray-50"
          >
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-gray-700 font-medium">Google</span>
          </Button>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
