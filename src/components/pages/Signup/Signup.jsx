import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SuccessNotify = () => toast.success("Successfully registred!");

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post(
      "http://classroommern.herokuapp.com/user/register",
      data
    );
    res.data.success ? SuccessNotify() : console.log(res.data.message);
    // navigate("/login");
  };

  return (
    <div>
      <section class="">
        <div class=" items-center px-5 lg:px-20">
          <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
              <div class="mt-6">
                <div className="flex justify-between items-center">
                  <h2 class="mt-6 text-3xl font-extrabold text-neutral-600 mb-8">
                    Sign Up.
                  </h2>
                  <Link to="/">
                    {" "}
                    <i class="ri-arrow-right-s-line text-2xl "></i>
                  </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} class="space-y-6">
                  <div class="grid grid-cols-1 gap-2">
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          {...register("email", {
                            required: "Email Address is required",
                          })}
                          type="email"
                          placeholder="Your Email"
                          class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                        {/* {errors.email && <span role="alert">{errors.email.message}</span>} */}
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label
                        for="password"
                        class="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div class="mt-1">
                        <input
                          {...register("password", {
                            required: "password is required",
                            minLength: {
                              value: 6,
                              message: "password length must be 6 char",
                            },
                          })}
                          type="password"
                          placeholder="Your Password"
                          class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                        {/* {errors.password && <span role="alert">{errors.password.message}</span>} */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Sign up As{" "}
                    </label>
                    <select
                      {...register("role", { required: true })}
                      className="my-2 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300
                    "
                    >
                      <option value="">Select...</option>
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                    </select>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label
                        for="remember-me"
                        class="block ml-2 text-sm text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div class="relative my-4">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 text-neutral-600 bg-white">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <div class="flex items-center justify-center">
                      <span class="ml-4"> Log in with Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
