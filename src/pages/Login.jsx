import { useState } from "react";
import axios from "axios";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./Login.css";

export function Login() {
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:3000/api/users/login", { email, password })
         .then((result) => {
            console.log(result);
            toast.success(result.data.message);
            navigate("/");
         })
         .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
         });
   };
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordShown, setPasswordShown] = useState(false);
   const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

   return (
      <section className="background grid text-center h-screen items-center p-8">
         <div>
            <Typography
               variant="h3"
               color="blue-gray"
               className="mb-2"
            >
               Sign In
            </Typography>
            <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
               Enter your email and password to sign in
            </Typography>
            <form
               action="#"
               className="mx-auto max-w-[24rem] text-left"
            >
               <div className="mb-6">
                  <label htmlFor="email">
                     <Typography
                        variant="small"
                        className="mb-2 block font-medium text-gray-900"
                     >
                        Your Email
                     </Typography>
                  </label>
                  <Input
                     id="email"
                     color="gray"
                     size="lg"
                     type="email"
                     name="email"
                     placeholder="name@mail.com"
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                     labelProps={{
                        className: "hidden",
                     }}
                  />
               </div>
               <div className="mb-6">
                  <label htmlFor="password">
                     <Typography
                        variant="small"
                        className="mb-2 block font-medium text-gray-900"
                     >
                        Password
                     </Typography>
                  </label>
                  <Input
                     size="lg"
                     placeholder="********"
                     onChange={(e) => setPassword(e.target.value)}
                     labelProps={{
                        className: "hidden",
                     }}
                     className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                     type={passwordShown ? "text" : "password"}
                     icon={
                        <i onClick={togglePasswordVisiblity}>
                           {passwordShown ? (
                              <EyeIcon className="h-5 w-5" />
                           ) : (
                              <EyeSlashIcon className="h-5 w-5" />
                           )}
                        </i>
                     }
                  />
               </div>
               <Button
                  color="gray"
                  size="lg"
                  className="mt-6"
                  onClick={handleSubmit}
                  fullWidth
               >
                  sign in
               </Button>
               <div className="!mt-4 flex justify-end">
                  <Typography
                     as="a"
                     href="#"
                     color="blue-gray"
                     variant="small"
                     className="font-medium"
                  >
                     Forgot password
                  </Typography>
               </div>
               <Button
                  variant="outlined"
                  size="lg"
                  className="mt-6 flex h-12 items-center justify-center gap-2"
                  fullWidth
               >
                  <img
                     src={`https://www.material-tailwind.com/logos/logo-google.png`}
                     alt="google"
                     className="h-6 w-6"
                  />{" "}
                  sign in with google
               </Button>
               <Typography
                  variant="small"
                  color="gray"
                  className="!mt-4 text-center font-normal"
               >
                  Not registered?{" "}
                  <Link
                     to={"/register"}
                     className="font-medium text-gray-900"
                  >
                     Create account
                  </Link>
               </Typography>
            </form>
         </div>
      </section>
   );
}

export default Login;
