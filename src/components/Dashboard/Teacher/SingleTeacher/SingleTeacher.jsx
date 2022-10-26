import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleTeacher } from "../../../../Store/Actions/TeachersAction";
import { getAllUsers } from "../../../../Store/Actions/usersAction";
import "./SingleTeacher.css";

export default function SingleTeacher() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teacher } = useSelector((state) => state.teachers);
  const { users } = useSelector((state) => state.users);
  console.log("teacher: ", teacher);
  // console.log("teachers: ", users);
  // console.log(id);

  // useing dispatch for storeing single teachers refreesh korleu data jave nah.
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getSingleTeacher(id));
  }, [id, dispatch]);

  let filterteacher;
  users.forEach((user) => {
    if (user._id === teacher.teacher_info) {
      filterteacher = user;
    }
  });
  console.log("filter teacher: ", filterteacher);

  return (
    <div className="mt-10">
      {/* <h1>Single Teacher</h1> */}
      <div className="">
        <div className="topCoverImg">
          <img
            className=""
            src="https://cdn.wallpapersafari.com/12/28/0objwK.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="">
          <img
            className="cursor-pointer mb-2 shadow-lg mx-auto h-14 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
            alt=""
          />
          <div>
            {/* <p className=" py-1">{teacher.name}</p> */}
            {/* <p className=" py-1">{teacher.email}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
