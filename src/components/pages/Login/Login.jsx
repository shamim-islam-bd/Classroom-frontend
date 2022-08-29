import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, loginAction } from "../../../Store/Actions/userActions";
import { hideLoading, showLoading } from "../../../Store/reducers/alertReducer";

export default function Login() {
  const dispatch = useDispatch();
  const alert = useAlert();
  // error state
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.alerts);
  console.log(loading);

  // const {isAuthenticated, loading, error } = useSelector(state => state.auth);
  // console.log(user);
  const { user, error, isAuthenticated } = useSelector((state) => state.user);
  // console.log(user, error, isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const onSubmit = async (data) => {
    const userdata = {
      email: data?.email,
      password: data?.password,
    };

    dispatch(loginAction(userdata));
    dispatch(showLoading());

    await axios
      .post("/user/login", userdata)
      .then((res) => {
        dispatch(hideLoading());
        alert.success("You are successfully logged in");
        const token = res.data.token;
        document.cookie = `token=${token}`
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(hideLoading());
        setErrorMessage("Invalid email or password");
      });
    };
    

    

  return (
    <div>
      <section class="">
        <div class="items-center  lg:px-20">
          <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8 border rounded-lg p-6 shadow-md">
              <div class="mt-6">
                <form onSubmit={handleSubmit(onSubmit)} class="space-y-6">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 class=" text-3xl font-extrabold text-neutral-600 mb-8">
                        Sign In.
                      </h2>

                      <Link to="/signup">
                        <a
                          class="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                          href="/download"
                        >
                          <span class="sr-only"> Download </span>

                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
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
                          required: "Email Address is required",
                        })}
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required=""
                        placeholder="Your Password"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                      {/* <p>{error?.password?.message}</p> */}
                    </div>
                  </div>
                  {errorMessage && (
                    <p class="text-red-500 text-sm">{errorMessage}</p>
                  )}
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
