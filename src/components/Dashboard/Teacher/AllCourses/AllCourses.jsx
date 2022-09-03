import { Col, Row } from "antd";
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
  const { courses, error } = useSelector((state) => state.allCourse.Courses);
  console.log(courses, error);

  const { loading } = useSelector((state) => state.alerts);
  // console.log(loading);

  useEffect(() => {
    {
      showLoading;
    }
    if (error) {
      alert.error("There was an error");
    }
    dispatch(getAllCourses());
    {
      hideLoading;
    }
  }, [dispatch, showLoading, error, alert]);

  return (
    <div>
      <Row>
        {courses &&
          courses.map((course) => (
            <Col
              key={course._id}
              className="p-4"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              span={8}
            >
              <div>
                <div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg">
                  <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div class="justify-between sm:flex">
                    <div>
                      <Link to={course._id}>
                        <h5 class="text-xl font-bold text-gray-900">
                          {course.title}
                        </h5>
                      </Link>
                      <p class="mt-1 text-xs font-medium text-gray-600">
                        By John Doe
                      </p>
                    </div>

                    <div class="flex-shrink-0 hidden ml-3 sm:block">
                      <img
                        class="object-cover w-16 h-16 rounded-lg shadow-sm"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAf9gA-CRlCv5tHlzbNDJnmqvnNG1jRrHGA&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="mt-4 sm:pr-8">
                    <p class="text-sm text-gray-500">{course.description}</p>
                  </div>

                  <dl class="flex justify-between mt-6">
                    <div class="flex flex-col-reverse">
                      <dt class="text-sm font-medium text-gray-600">
                        Published
                      </dt>
                      <dd class="text-xs text-gray-500"> {course.created}</dd>
                    </div>

                    <div class="flex flex-col-reverse ml-3 sm:ml-6">
                      <Link
                        class="relative inline-block group focus:outline-none focus:ring"
                        to={course._id}
                      >
                        <span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-sky-200 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                          Details
                        </span>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
}
