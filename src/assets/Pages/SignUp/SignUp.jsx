import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signInImg from "../../Resources/others/authentication1.png";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "User Signed Up Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  return (
    <section>
      <div className="px-12 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="grid flex-wrap items-center gap-8 justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
          <div className="w-full px-6 py-3">
            <div className="mt-3 text-left sm:mt-5">
              <h3 className="text-lg font-bold text-center text-neutral-600 leading-6 lg:text-5xl">
                SIGN UP
              </h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6 space-y-2">
                <div>
                  <label htmlFor="text" className="sr-only">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="name "
                    name="name"
                    id="name"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your Name"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email "
                    name="email"
                    id="email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])/
                    })}
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-5 py-3 mb-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password Must Be 8 Characters
                    </span>
                  )}
                  {errors.password?.type ==="pattern" && (
                    <span className="text-red-600"><p>Password Must Be Have One Uppercase One Lowercase One Special Character & One Number</p></span>
                  )}
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <input
                    className=" flex items-center justify-center w-full text-base font-medium text-center btn bg-blue-600 text-white hover:bg-blue-300 "
                    type="submit"
                    value="Sign Up"
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
                <span className="ml-4"> Sign Up with Google</span>
              </div>
            </button>
            <div>
              <a
                href="#"
                type="button"
                className="inline-flex justify-center text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
              >
                Do not Have An Account?
                <span className="text-blue-600">
                  <Link to="/logIn">LOG IN</Link>
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
        <title>BistroBoss | Sign Up</title>
      </Helmet>
    </section>
  );
};

export default SignUp;
