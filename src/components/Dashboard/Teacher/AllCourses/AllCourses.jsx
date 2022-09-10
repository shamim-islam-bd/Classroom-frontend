// import { Col, Row } from "antd";
import { Button, Tooltip } from "antd";
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

  const { loading } = useSelector((state) => state.auth.alerts);
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
        <h1 className="font-bold text-2xl">Popular classNamees</h1>
        <Link
          to="/course/liveclassName"
          className="bg-red-600 hover:text-white text-white px-2 py-1 rounded-full"
        >
          Live classNamees
        </Link>
      </div>
      <div className="">
        <div className="min-h-screen grid lg:grid-cols-3 md:grid-cols-2">
          {Courses?.map((course) => (
            <div className="max-w-sm w-full py-4 px-3 text-sm" key={course._id}>
              {/* {console.log(course)} */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-56 p-4 relative">
                  <img
                    src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    srcSet=""
                  />
                  <div className="flex justify-end">
                    <Tooltip
                      className="border-none hover:bg-transparent text-white hover:text-[#2db7f5] text-[24px] h-6 w-6 fill-current cursor-pointer absolute top-0 right-2 m-8"
                      title="Add to Favorites"
                      color="#2db7f5"
                    >
                      <Button>
                        <i className="ri-heart-line"></i>
                      </Button>
                    </Tooltip>
                  </div>
                </div>
                <div className="py-3 px-4">
                  <p className="uppercase tracking-wide font-bold text-gray-700">
                    <span>{course.title} • </span>
                    <span className="text-sm text-end lowercase">1 Y ago</span>
                  </p>
                  <p className="text-2xl text-gray-900">$ {course.price}</p>
                  <p className="text-gray-700">742 Evergreen Terrace</p>
                  <p className="text-gray-700 my-2">
                    <span className="text-sm bg-green-200 px-2 rounded-full">
                      {course.category}
                    </span>{" "}
                  </p>
                </div>

                <div className="px-4 mb-4">
                  <div className="flex items-center space-x-2 text-base"></div>
                  <div className="my-1 flex items-center gap-2">
                    <div className="flex -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="mt-3 text-sm font-medium">
                      <a href="#" className="text-blue-500">
                        +199{" "}
                        <span className="text-gray-400 mx-1">
                          Applied for className
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <Link to="" className="text-gray-900 text-sm flex">
                      <i className="ri-eye-line mx-1"></i>
                      <span> Details</span>
                    </Link>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <Link to="" className="text-gray-900 text-sm flex">
                      <i className="ri-customer-service-line mx-1"></i>
                      <span>Start className</span>
                    </Link>
                  </div>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                    Teacher
                  </div>
                  <div className="flex items-center pt-2">
                    <div className="bg-cover bg-center shadow-lg rounded-full mr-3 h-12 w-12">
                      <img
                        className="profilepic w-[100%] h-[100%] rounded-full"
                        src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Tiffany Heffner</p>
                      <p className="text-sm text-gray-700">(555) 555-4321</p>
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
