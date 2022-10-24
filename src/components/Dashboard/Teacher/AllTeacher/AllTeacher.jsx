import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
import { getAllUsers } from "../../../../Store/Actions/usersAction";
import "./AllTeacher.css";

export default function AllTeacher() {
  const dispatch = useDispatch();
  // const [AllTeachers, setAllTeachers] = useState([]);

  // const { auth } = useSelector((state) => state.auth.login);
  const { teachers } = useSelector((state) => state.teachers);
  const { users } = useSelector((state) => state.users);
  // console.log("teachers: ", teachers);

  let filterteacher = [];
  users.forEach((user) => {
    teachers.forEach((teacher) => {
      if (user._id === teacher.teacher_info) {
        filterteacher.push(user);
      }
    });
  });
  // console.log("filter teacher: ", filterteacher);

  // useEffect(() => {
  //   axios("/teachers")
  //     .then((res) => {
  //       console.log(res.data.teachers);
  //       setAllTeachers(res.data.teachers);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row mt-10">
        <div className="basis-3/4 lg:basis-2/4 gap-4">
          <div className=" mt-10">
            {teachers?.map((teacher, index) => {
              // console.log("Teachers: ", teacher);
              // console.log("Teachers index: ", index);
              return (
                <div className="" key={teacher._id}>
                  <div className="card">
                    {/* <div className="portada"></div> */}
                    <div className="img-avatar"></div>
                    <div className="title-total">
                      <div className="flex items-center justify-between pb-4">
                        <span className="text-green-800 font-bold text-[13px] p-3">
                          <p className="flex">
                            <i className="ri-focus-2-line mr-[2px]"></i> Online
                          </p>
                        </span>
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
                            {/* <span className="flex text-sm px-1">
                        <i class="ri-eye-line px-1"></i>
                         Profile
                      </span> */}
                          </Tooltip>
                        </Link>
                      </div>
                      <p className="title text-cyan-800">
                        Professior Mr. <span>{filterteacher[index].name}</span>
                      </p>
                      <p className="px-4 text-[12px]">
                        specialist: {teacher.specialist}
                        <br />
                        email:{" "}
                        <span className="text-cyan-700">
                          {filterteacher[index].email}
                        </span>
                      </p>
                      {/* <span className="text-[10px] px-4">{user.email}</span> */}
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
                          <Link to="" className="link">
                            <i className="ri-heart-line"></i>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          className="btn text-center"
                          title="Message"
                          color="#2db7f5"
                        >
                          <Link to="" className="link">
                            {" "}
                            <i className="ri-chat-2-line"></i>
                          </Link>
                        </Tooltip>
                        <Tooltip
                          className="btn text-center"
                          title="Start class"
                          color="#2db7f5"
                        >
                          <Link to="" className="link">
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
        <div className="basis-1/4">
          <h1>Filter teacher</h1>
        </div>
      </div>
    </>
  );
}
