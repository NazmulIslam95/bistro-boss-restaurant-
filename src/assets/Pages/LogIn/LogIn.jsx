import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const LogIn = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false)
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <section>
      <div className="  px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
                      Log In
                    </h3>
                  </div>
                </div>
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
                    <div>
                      <LoadCanvasTemplate />
                    </div>
                    <button
                      onClick={handleValidateCaptcha}
                      className="btn btn-outline btn-xs mt-8 bg-blue-600 text-white"
                    >
                      Validate{" "}
                    </button>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Captcha
                    </label>
                    <input
                      ref={captchaRef}
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
            </div>
            <div className="order-first hidden w-full lg:block m-4">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
