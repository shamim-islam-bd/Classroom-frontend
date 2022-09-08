// import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../../../Store/Actions/CoursesAction";

import {
  hideLoading,
  showLoading,
} from "../../../../Store/reducers/alertSlice";

export default function AllCourses() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { Courses, error } = useSelector((state) => state.allCourse);
  // console.log(Courses);

  const { loading } = useSelector((state) => state.user.alerts);
  // console.log(loading);

  useEffect(() => {
    showLoading();
    axios
      .get("/allCourses")
      .then((res) => {
        dispatch(getAllCourses());
      })
      .catch((error) => {
        console.log(error);
      });

    hideLoading();
  }, [dispatch]);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center px-6 ">
        <h1 className="font-bold text-2xl">Popular Classes</h1>
        <Link
          to="/course/liveclass"
          className="bg-red-600 hover:text-white text-white px-2 py-1 rounded-full"
        >
          Live Classes
        </Link>
      </div>
      <div class="">
        <div class="min-h-screen grid lg:grid-cols-3 md:grid-cols-2">
          {Courses?.map((course) => (
            <div class="max-w-sm w-full py-4 px-3 text-sm">
              {console.log(course)}
              <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                <div class="bg-cover bg-center h-56 p-4 relative">
                  <img
                    src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    srcSet=""
                  />
                  <div class="flex justify-end">
                    <svg
                      class="h-6 w-6 text-white fill-current cursor-pointer absolute top-0 right-0 m-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                  </div>
                </div>
                <div class="py-3 px-4">
                  <p class="uppercase tracking-wide font-bold text-gray-700">
                    <span>{course.title} • </span>
                    <span className="text-sm text-end lowercase">1 Y ago</span>
                  </p>
                  <p class="text-2xl text-gray-900">$ {course.price}</p>
                  <p class="text-gray-700">742 Evergreen Terrace</p>
                  <p class="text-gray-700 my-2">
                    <span className="text-sm bg-green-200 px-2 rounded-full">
                      {course.category}
                    </span>{" "}
                  </p>
                </div>

                <div className="px-4 mb-4">
                  <div class="flex items-center space-x-2 text-base"></div>
                  <div class="my-1 flex items-center gap-2">
                    <div class="flex -space-x-3 overflow-hidden">
                      <img
                        class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        class="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="mt-3 text-sm font-medium">
                      <a href="#" class="text-blue-500">
                        +199{" "}
                        <span className="text-gray-400 mx-1">
                          Applied for Class
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex p-4 border-t border-gray-300 text-gray-700">
                  <div class="flex-1 inline-flex items-center">
                    <Link to="" class="text-gray-900 text-sm flex">
                      <i class="ri-eye-line mx-1"></i>
                      <span> Details</span>
                    </Link>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <Link to="" class="text-gray-900 text-sm flex">
                      <i class="ri-customer-service-line mx-1"></i>
                      <span>Start Class</span>
                    </Link>
                  </div>
                </div>
                <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
                    Teacher
                  </div>
                  <div class="flex items-center pt-2">
                    <div class="bg-cover bg-center shadow-lg rounded-full mr-3 h-12 w-12">
                      <img
                        className="profilepic w-[100%] h-[100%] rounded-full"
                        src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div>
                      <p class="font-bold text-gray-900">Tiffany Heffner</p>
                      <p class="text-sm text-gray-700">(555) 555-4321</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
