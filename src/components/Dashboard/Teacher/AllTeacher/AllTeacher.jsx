import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
import "./AllTeacher.css";

export default function AllTeacher() {
  const dispatch = useDispatch();

  const { teachers } = useSelector((state) => state.teachers);
  const { user } = useSelector((state) => state.user.user);
  console.log("fm Teacher fnd", teachers[0].teacher_info);
  //   console.log("fm user fnd", user._id);

  {
   const re = user.map((user) => user._id === teachers[0].teacher_info);
   console.log(re); 
  }

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <div className="mt-10">
      <div className="flex flex-cols-2">
        {teachers?.map((teacher) => (
          <>
            <div class="card">
              <div class="img-avatar"></div>
              <div class="card-text">
                <div class="portada"></div>
                <div class="title-total">
                  <div class="title gap-2">
                    <span>Professior Mr.{teacher.name}</span>
                    <Link to="">
                      <Tooltip
                        title="View Profile"
                        color="#2db7f5"
                        className="inline-block text-white bg-[#2db7f5] border border-[#2db7f5] rounded-full hover:bg-transparent hover:text-cyan-600 active:text-cyan-500 focus:outline-none focus:ring"
                      >
                        <svg
                          className="w-6 h-6"
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
                      </Tooltip>
                    </Link>
                  </div>
                  <h2>Modern Science</h2>

                  <div class="desc">
                    I have a contagious Can-Do attitude, determined to leverage
                    my knowledge and passion for writing to be a catalyst
                    alongside this journey with you. I am easy going,
                  </div>
                  <div class="actions mt-2">
                    <Tooltip
                      className="btn"
                      title="Add to Favorite"
                      color="#2db7f5"
                    >
                      <Link to="" className="link">
                        <i class="ri-heart-line"></i>
                      </Link>
                    </Tooltip>
                    <Tooltip className="btn" title="Message" color="#2db7f5">
                      <Link to="" className="link">
                        {" "}
                        <i class="ri-chat-2-line"></i>
                      </Link>
                    </Tooltip>
                    <Tooltip
                      className="btn"
                      title="Start Class"
                      color="#2db7f5"
                    >
                      <Link to="" className="link">
                        <i class="ri-phone-line"></i>
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
