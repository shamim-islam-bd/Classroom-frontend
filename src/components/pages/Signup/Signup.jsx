import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors } from "../../../Store/Actions/CoursesAction";
import { registerAction } from "../../../Store/Actions/authActions";
import { hideLoading, showLoading } from "../../../Store/reducers/alertSlice";

export default function Signup() {
  const alert = useAlert();
  const dispatch = useDispatch();
  // error state
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { auth, error, isAuthenticated } = useSelector((state) => state.auth);
  // console.log(user, error, isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error, auth, isAuthenticated]);

  const onSubmit = async (data) => {
    const userinfo = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      role: data?.role,
    };
    dispatch(showLoading());
    await axios.post("/user/register", userinfo);
    dispatch(hideLoading());
    dispatch(registerAction(userinfo))
      .then((res) => {
        alert.success("User Registered Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log("frm sign up page: ", error.message);
        dispatch(hideLoading());
        setErrorMessage("Please enter your email or password & user role");
      });
  };

  return (
    <div>
      <section className="">
        <div className=" items-center lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-8 border rounded-lg p-6">
              <div className="mt-6">
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-extrabold text-neutral-600 mb-8">
                    Sign Up.
                  </h2>
                  <Link to="/">
                    <a
                      className="inline-block p-3 text-indigo-600 border border-indigo-600 rounded-full hover:text-white hover:bg-indigo-600 active:bg-indigo-500 focus:outline-none focus:ring"
                      href="/download"
                    >
                      <span className="sr-only"> Download </span>

                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <label
                        for="name"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("name", {
                            required: "Enter your name",
                          })}
                          type="name"
                          placeholder="Your name"
                          className="classReq-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("email", {
                            required: "Email Address is required",
                          })}
                          type="email"
                          placeholder="Your Email"
                          className="classReq-input"
                        />
                        {/* {errors.email && <span role="alert">{errors.email.message}</span>} */}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        for="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
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
                          className="classReq-input"
                        />
                        {/* {errors.password && <span role="alert">{errors.password.message}</span>} */}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Sign up As{" "}
                    </label>
                    <select
                      {...register("role", { required: true })}
                      className="classReq-input"
                    >
                      <option value="">Select...</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        placeholder="Your password"
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label
                        for="remember-me"
                        className="block ml-2 text-sm text-neutral-600"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-neutral-600 bg-white">
                      {" "}
                      Or continue with{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <div className="flex items-center justify-center">
                      <span className="ml-4"> Log in with Google</span>
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
