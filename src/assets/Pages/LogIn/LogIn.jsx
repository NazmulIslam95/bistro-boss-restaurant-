import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import signInImg from "../../Resources/others/authentication1.png";
import Swal from "sweetalert2";

const LogIn = () => {

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const { signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logged In Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
  };

  return (
    <section className="bgImg">
      <div className="px-12 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="grid flex-wrap items-center gap-8 justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
          <div className="w-full px-6 py-3">
            <div className="mt-3 text-left sm:mt-5">
              <h3 className="text-lg font-bold text-center text-neutral-600 leading-6 lg:text-5xl">
                Log In
              </h3>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mt-6 space-y-2">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email "
                    name="email"
                    id="email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-5 py-3 mb-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="bg-gray-50 py-2 px-8 rounded-lg gap-4 flex">
                  <LoadCanvasTemplate />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Captcha
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="captcha"
                    name="captcha"
                    id="captcha"
                    className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Type The Captcha Above"
                  />
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <input
                    disabled={disabled}
                    className=" flex items-center justify-center w-full text-base font-medium text-center btn bg-blue-600 text-white hover:bg-blue-300 "
                    type="submit"
                    value="Log In"
                  />
                </div>
                <div>
                  <a
                    href="#"
                    type="button"
                    className="inline-flex justify-center text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                  >
                    Forgot your Password?
                  </a>
                </div>
              </div>
            </form>

            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-neutral-600 bg-white">
                {" "}
                Or continue with{" "}
              </span>
            </div>
            <button
              type="submit"
              className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4"> Log in with Google</span>
              </div>
            </button>
            <div>
              <a
                href="#"
                type="button"
                className="inline-flex justify-center text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
              >
                Don't Have An Account?{" "}
                <span className="text-blue-600">
                  <Link to="/signUp">SIGN UP</Link>
                </span>
              </a>
            </div>
          </div>
          <div className="order-first hidden w-full lg:block m-4">
            <img
              className="object-cover h-full bg-cover rounded-l-lg"
              src={signInImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <Helmet>
        <title>BistroBoss | Log In</title>
      </Helmet>
    </section>
  );
};

export default LogIn;
