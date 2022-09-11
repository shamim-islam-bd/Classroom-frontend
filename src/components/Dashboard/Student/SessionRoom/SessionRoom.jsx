import React from "react";
import { useSelector } from "react-redux";

export default function SessionRoom() {
  const { teachers } = useSelector((state) => state.teachers);
  console.log(teachers);

  return (
    <div className="mt-20">
      <div>
        {teachers?.map((teacher) => {
          return (
            <div key={teacher._id}>
              <h1>{teacher.name}</h1>
            </div>
          );
        })}
      </div>
      <h1 className="text-xl font-bold m-2">Session Room </h1>
      <div className="flex items-center justify-center">
        <div className="max-w-md md:max-w-2xl px-2">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
            <div
              className="bg-cover bg-bottom h-56 md:h-auto md:w-56"
              // style="background-image: url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)"
            >
              <img
                src="https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
                alt=""
                srcSet=""
              />
            </div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">
                  Amsterdam Walking Tour
                </p>
                <p className="text-gray-700 md:text-lg">
                  Explore popular tourist destinations as well as hidden local
                  favourites.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100 text-sm">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">17</span> per
                      person*
                    </div>
                    <div className="flex items-center">
                      <div className="flex -mx-px">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        28 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Start Session
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-base">
                  *Prices may vary depending on selected date.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
