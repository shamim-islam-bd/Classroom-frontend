import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTeachers } from "../../../../Store/Actions/TeachersAction";
import { getAllUsers } from "../../../../Store/Actions/usersAction";
import "./AllTeacher.css";

export default function AllTeacher() {
  const dispatch = useDispatch();

  const { teachers } = useSelector((state) => state.teachers);
  const { auth } = useSelector((state) => state.auth.login);
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
  // console.log("filter user: ", filterteacher);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  return (
    <div className="mt-10">
      {/* <h1>hey</h1> */}
      <div className="flex flex-cols-1 gap-4">
        {teachers.map((teacher) => { 
          <div className="card">
            {/* {console.log(teacher)} */}
            <div className="img-avatar"></div>
            {/* <h1>{teacher.specialist}</h1> */}
            <div className="card-text">
              <div className="portada"></div>
              <div className="title-total">
                <div className="title justify-end gap-2">
                  {/* <span>Professior Mr.{user.name}</span> */}
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
                {/* <p> {teacher.specialist}</p> */}
                {/* <span className="text-[10px] px-4">{user.email}</span> */}
                <div className="desc">
                  I have a contagious Can-Do attitude, determined to leverage my
                  knowledge and passion for writing to be a catalyst alongside
                  this journey with you. I am easy going,
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
          </div>;
        })}
      </div>
    </div>
  );
}

// {
//   teachers.map((teacher) => {
//     return (
//       <div className="flex flex-cols-1 gap-4" key={teacher._id}>
//         <p>{teacher.specialist}</p>
//         <p>{teacher.specialist}</p>
//         <p>{teacher.specialist}</p>
//       </div>
//   )})
// }

/* {filterteacher.map(
            (user) => (
              // if (user._id === teacher.teacher_info) {
              //   return (
              <div key={user._id}>
                <div className="title">
                  <h2>Professior {user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
            )
            //   );
            // }
          )} */
