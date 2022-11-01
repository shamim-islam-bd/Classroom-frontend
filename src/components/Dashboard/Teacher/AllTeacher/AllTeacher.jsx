import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavoriteTeacher,
  AllFavoriteTeacher,
  removeFavoriteTeacher,
} from "../../../../Store/Actions/StudentAction";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
import "./AllTeacher.css";

export default function AllTeacher() {
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.teachers);
  const { auth } = useSelector((state) => state.auth.login);
  const { favoriteTeachers } = useSelector((state) => state.students);
  // console.log("favoriteTeachers: ", favoriteTeachers);

  const userId = auth._id;
  // console.log(auth._id);

  useEffect(() => {
    dispatch(AllFavoriteTeacher(userId));
    dispatch(getAllTeachers());
  }, [dispatch, userId, favoriteTeachers]);

  const AddtoFavorite = (id, userId) => {
    dispatch(addToFavoriteTeacher(id, userId));
  };

  const disLinked = (teacherId) => {
    dispatch(removeFavoriteTeacher(teacherId));
  };

  return (
    <>
      <div className="mt-10">
        <div className=" gap-4">
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {teachers?.map((teacher, index) => {
              return (
                <div className="p-2" key={teacher._id}>
                  {/* {console.log(teacher._id)} */}
                  <div className="card">
                    <div className="relative">
                      <img
                        className="absolute h-20 w-20 inset-x-0 -top-8 block mx-auto rounded-full sm:shrink-0"
                        src={teacher?.teacher_info?.avader?.url}
                        alt={teacher?.teacher_info?.name}
                      />
                    </div>
                    <div className="title-total">
                      <div className="flex items-center justify-between pb-4">
                        <span className="text-green-800 font-bold text-[13px] p-3">
                          <p className="flex">
                            <i className="ri-focus-2-line mr-[2px]"></i> Online
                          </p>
                        </span>
                        <Link to={`${teacher?._id}`}>
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
                      <p className="px-4 text-sm pb-2">
                        Professior{" "}
                        <span className="text-cyan-800">
                          {" "}
                          Mr. {teacher?.teacher_info?.name}
                        </span>
                      </p>
                      <p className="px-4 text-[12px]">
                        Experience :{" "}
                        <span className="text-cyan-800"> 6 years.</span>
                      </p>
                      <p className="px-4 text-[12px]">
                        specialist:
                        <span className="text-cyan-800">
                          {" "}
                          {teacher?.specialist}
                        </span>
                        <br />
                        email:{" "}
                        <span className="text-cyan-700">
                          {teacher?.teacher_info?.email}
                        </span>
                      </p>
                      <div className="desc">
                        I have a contagious Can-Do attitude, determined to
                        leverage my knowledge and passion for writing to be a
                        catalyst alongside this journey with you.
                      </div>
                      <div className="actions mt-2">
                        <Tooltip
                          className="btn text-center"
                          title="Add to Favorite"
                          color="#2db7f5"
                        >
                          {favoriteTeachers?.find(
                            (item) => item._id === teacher._id
                          ) ? (
                            <i
                              onClick={() => disLinked(teacher._id)}
                              className="ri-dislike-fill"
                            ></i>
                          ) : (
                            <i
                              onClick={() => AddtoFavorite(teacher._id, userId)}
                              className="ri-heart-line link"
                            ></i>
                          )}
                        </Tooltip>
                        <Tooltip
                          className="btn text-center"
                          title="Message"
                          color="#2db7f5"
                        >
                          <Link to={`/dashboard/private-session/${teacher._id}`} className="link">
                            {" "}
                            <i className="ri-chat-2-line"></i>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          className="btn text-center"
                          title="Start class"
                          color="#2db7f5"
                        >
                          <Link to={`/dashboard/private-session/${teacher._id}`} className="link">
                            <i className="ri-phone-line"></i>
                          </Link>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
